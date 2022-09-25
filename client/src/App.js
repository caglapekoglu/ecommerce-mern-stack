import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductList from './pages/ProductList';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/products' element={<ProductList></ProductList>}></Route>
          <Route path='/product' element={<Product></Product>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
