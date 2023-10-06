import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateProductPage from "./pages/Create-Product-Page";
import ProductList from "./pages/ProductsDashboard";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/create-product" element={<CreateProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
