import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import './AddProduct.css';

const AddProduct = ({ editProduct, restrictPermission, setEditProduct }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async data => {
        if (!editProduct && !data.image[0]) {
            return toast.error('Please upload an image!!!!');
        }
        const loading = toast.loading('Uploading.........Please wait!');
        let imageURL = editProduct ? editProduct.image : "";

        if (!editProduct || (editProduct && data.image[0])) {
            const imageData = new FormData();
            imageData.set('key', '57fddaeb2b4a6d4911b0c969ca3d4490');
            imageData.append('image', data.image[0]);
            try {
                const res = await axios.post('https://api.imgbb.com/1/upload', imageData);
                imageURL = res.data.data.display_url;
            } catch (error) {
                toast.dismiss(loading);
                return toast.error('Failed to upload the image!!!!!!!!! ');
            }
        }

        const productInfo = {
            name: data.name,
            description: data.description,
            price: data.price,
            image: imageURL
        }

        if (editProduct) {
            if (restrictPermission(editProduct._id)) {
                toast.dismiss(loading);
                setEditProduct({});
                return swal("Permission restriction!", "As a test-admin, you don't have permission to edit 6 core products. But you can edit your added products.", "info");
            }
            if (
                data.name === editProduct.name &&
                data.price === editProduct.price &&
                imageURL === editProduct.image &&
                data.description === editProduct.description
            ) {
                toast.dismiss(loading);
                setEditProduct({});
                return toast.error("You haven't changed anything!");
            }
            axios.patch(`http://localhost:8080/update/${editProduct._id}`, productInfo)
                .then(res => {
                    toast.dismiss(loading);
                    if (res.data) {
                        setEditProduct(productInfo);
                        return swal("Successfully updated", "Your product has been successfully updated!", "success");
                    }
                    setEditProduct({});
                    swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
                })
                .catch(error => {
                    toast.dismiss(loading);
                    setEditProduct({});
                    swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
                });
            return;
        }

        axios.post('http://localhost:8080/addProduct', productInfo)
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal("Successfully Uploaded", "Your new product has been successfully added.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            });
    }
    return (
        <>
        <section className="add-product">
            <Form onSubmit={handleSubmit(onSubmit)} className="w-100">
                <div className="py-5 mx-auto mt-5 bg-white form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                    <Form.Row className="justify-content-center">

                        <Form.Group as={Col} md={5} sm={12} className="mr-md-5">
                            <Form.Label style={{ fontWeight: "bold" }}>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={editProduct ? editProduct.name : ""}
                                {...register("name", { required: true })}
                                placeholder="Enter Product Name" />
                        </Form.Group>

                        <Form.Group as={Col} md={5} sm={12}>
                            <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
                            <Form.Control
                                style={{ maxWidth: "260px" }}
                                type="text"
                                defaultValue={editProduct ? editProduct.price : ""}
                                {...register("price", { required: true })}
                                placeholder="Enter Price" />
                        </Form.Group>

                        <Form.Group as={Col} md={5} sm={12} className="mr-md-5 mt-md-3">
                            <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                            <Form.Control
                                style={{ height: "10rem" }}
                                type="text"
                                defaultValue={editProduct ? editProduct.description : ""}
                                as="textarea"
                                {...register("description", { required: true })}
                                placeholder="Enter Description" />
                        </Form.Group>

                        <Form.Group as={Col} md={5} sm={12} className="mt-md-3">
                            <Form.Label style={{ fontWeight: "bold" }}>{editProduct ? "Add New Image" : "Add Image"}</Form.Label>
                            <Button
                                as={"label"}
                                htmlFor="upload"
                                variant="outline-primary"
                                className="d-block p-2 upload-btn">
                                <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />Upload Image
                            </Button>
                            <Form.Control
                                hidden="hidden"
                                id="upload"
                                type="file"
                                {...register("image")}
                                placeholder="Upload photo" />
                        </Form.Group>

                    </Form.Row>
                    <div className="text-center mt-4">
                        <Button type="submit" className="submit-btn btn-main">{editProduct ? "Update" : "Submit"}</Button>
                    </div>
                </div>
            </Form>
        </section>
        </>
    );
};

export default AddProduct;