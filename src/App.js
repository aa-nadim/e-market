import {BrowserRouter as Router, Route} from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './store/index';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Details from './components/Details/Details';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} />
        <ScrollToTop style={{ backgroundColor: '#12d0d9', padding: '5px' }} />
      </Provider>
    </Router>
  );
}

export default App;
