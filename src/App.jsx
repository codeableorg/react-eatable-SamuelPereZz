import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductsDashboard";
import ProductForm from "./pages/Create-Product-Page";
import DishData from "./pages/Dish-Data";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create-product" element={<ProductForm />} />
        <Route path="/products/:id" element={<DishData />} />
      </Routes>
    </Router>
  );
}

export default App;
