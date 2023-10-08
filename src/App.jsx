import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/ProductsDashboard";
import ProductForm from "./pages/Create-Product-Page";
import DishData from "./pages/Dish-Data";
import EditPage from "./pages/Edit-Page";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create-product" element={<ProductForm />} />
        <Route path="/products/:id" element={<DishData />} />
        <Route path="/products/edit-product/:id" element={<EditPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
