import React, { useEffect, useState } from "react";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000/api/products"; // Replace if deployed

const App = () => {
  const [products, setProducts] = useState([]);

  // ✅ Fetch all products on page load
  useEffect(() => {
    axios.get(BACKEND_URL)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // ✅ Add new product
  const handleAddProduct = async (newProduct) => {
    try {
      const res = await axios.post(BACKEND_URL, newProduct);
      setProducts([res.data, ...products]);
    } catch (err) {
      console.error("Add error:", err);
    }
  };

  // ✅ Delete product
  const handleDeleteProduct = async (product) => {
    try {
      await axios.delete(`${BACKEND_URL}/${product._id}`);
      setProducts(products.filter((p) => p._id !== product._id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <AddProductForm onAdd={handleAddProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default App;
