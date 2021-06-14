import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';
import './Login.css';
import Logo from '../../images/logo.png';
function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" }};

  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true);
    })
  }



  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }
  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){ 
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
            handleResponse(res, true);
        })
    }
    if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            handleResponse(res, true);
        })
    }
    e.preventDefault();
  }

  return (
    <div className="body container">
          {/* <h2>Login Form</h2> */}
            <form onSubmit={handleSubmit} action="/action_page.php" method="post">
              <div class="imgcontainer">
                <img src={Logo} alt="Avatar" />
              </div>
              <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                    
                <button type="submit">Login</button>
                
                <button onClick={googleSignIn}>Google Sign In</button>
                <p style={{color:'red'}}>{user.error}</p>
                {
                  user.success && <p style={{color:'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>
                }
              </div>
              <div class="container" style={{backgroundColor:"#f1f1f1"}}>
                <button type="button" class="cancelbtn">Cancel</button>
                <span class="psw">Forgot <a href="#">password?</a></span>
              </div>
            </form>
            
    </div>
  );
}

export default Login;