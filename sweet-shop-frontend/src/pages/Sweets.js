import React, { useEffect, useState, useCallback } from "react";
import API from "../api/api";
import { getUserRole } from "../utils/auth";
import { updateSweet, deleteSweet } from "../api/api";

function Sweets() {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [categories, setCategories] = useState([]);

  const role = getUserRole();

  // ✅ Memoized fetchSweets (fixes ESLint warning)
  const fetchSweets = useCallback(async () => {
    try {
      let params = {
        name: search,
        category: category
      };

      if (priceRange === "below100") {
        params.maxPrice = 100;
      } else if (priceRange === "100to200") {
        params.minPrice = 100;
        params.maxPrice = 200;
      } else if (priceRange === "above200") {
        params.minPrice = 200;
      }

      const res = await API.get("/sweets", { params });
      setSweets(res.data);
    } catch {
      alert("Failed to load sweets");
    }
  }, [search, category, priceRange]);

  // Fetch categories (runs once)
  const fetchCategories = async () => {
    try {
      const res = await API.get("/sweets");
      const uniqueCategories = [...new Set(res.data.map(s => s.category))];
      setCategories(uniqueCategories);
    } catch {
      console.log("Failed to load categories");
    }
  };

  // ✅ Correct dependency usage
  useEffect(() => {
    fetchSweets();
    fetchCategories();
  }, [fetchSweets]);

  // BUY SWEET
  const handleBuy = async (id) => {
    try {
      await API.post(`/sweets/${id}/purchase`);
      fetchSweets();
    } catch {
      alert("Purchase failed");
    }
  };

  // UPDATE SWEET (ADMIN)
  const handleUpdate = async (sweet) => {
    const price = prompt("Enter new price", sweet.price);
    const quantity = prompt("Enter new quantity", sweet.quantity);

    if (price === null || quantity === null) return;

    try {
      await updateSweet(sweet._id, {
        price: Number(price),
        quantity: Number(quantity)
      });
      fetchSweets();
      fetchCategories();
    } catch {
      alert("Update failed");
    }
  };

  // DELETE SWEET (ADMIN)
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this sweet?")) return;

    try {
      await deleteSweet(id);
      fetchSweets();
      fetchCategories();
    } catch {
      alert("Delete failed");
    }
  };

  return (
    <div className="container">
      <h2 className="inventory-title">🍬 Sweets Inventory</h2>

      {/* FILTER BAR */}
      <div className="filter-bar sweet-filters">
        <input
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="below100">Below ₹100</option>
          <option value="100to200">₹100 – ₹200</option>
          <option value="above200">Above ₹200</option>
        </select>

        <button className="buy" onClick={fetchSweets}>
          Apply Filters
        </button>
      </div>

      {sweets.length === 0 && (
        <p style={{ color: "white", textAlign: "center" }}>
          No sweets found
        </p>
      )}

      {/* SWEETS GRID */}
      <div className="sweets-grid">
        {sweets.map((sweet) => (
          <div key={sweet._id} className="sweet-card">
            <div>
              <h3>{sweet.name}</h3>
              <p><strong>Category:</strong> {sweet.category}</p>
              <p><strong>Price:</strong> ₹{sweet.price}</p>
              <p><strong>Quantity:</strong> {sweet.quantity}</p>

              {sweet.quantity <= 5 && sweet.quantity > 0 && (
                <span className="badge">Low Stock</span>
              )}
            </div>

            <div className="actions">
              <button
                className="buy"
                disabled={sweet.quantity === 0}
                onClick={() => handleBuy(sweet._id)}
              >
                {sweet.quantity === 0 ? "Out of Stock" : "Buy"}
              </button>

              {role === "admin" && (
                <>
                  <button className="edit" onClick={() => handleUpdate(sweet)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(sweet._id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sweets;
