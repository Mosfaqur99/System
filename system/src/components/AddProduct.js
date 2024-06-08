import React, { useState } from "react";
import axios from "axios";

const AddProducts = () => {
  const [formData, setFormData] = useState({ name: "", price: "", profit: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://66530fe0813d78e6d6d71125.mockapi.io/api/dashboard/",
        formData
      );
      alert("Product added successfully!");
      setFormData({ name: "", price: "", profit: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="profit"
          value={formData.profit}
          onChange={handleChange}
          placeholder="Profit"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
