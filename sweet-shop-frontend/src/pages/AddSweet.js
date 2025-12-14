import React, { useState } from "react";
import API from "../api/api";

function AddSweet() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const addSweet = async () => {
    await API.post("/sweets", { name, category, price, quantity });
    alert("Sweet added successfully");
    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
  };

  return (
  <div className="admin-section">
    <h2>Add Sweet (Admin)</h2>

    <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
    <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
    <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
    <input placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />

    <button className="buy" onClick={addSweet}>
      Add Sweet
    </button>
  </div>
);

}

export default AddSweet;
