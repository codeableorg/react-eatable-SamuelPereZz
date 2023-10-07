import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductsDashboard";
import ProductForm from "./pages/Create-Product-Page";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create-product" element={<ProductForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
