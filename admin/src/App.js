import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path='/products' component = {Products}/>
      <Route path="/product/:id?" component={Product} />
      <Route path="/cart/:id?" component={Cart} />
      <Route path="/checkout/:id?" component={Checkout} />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
