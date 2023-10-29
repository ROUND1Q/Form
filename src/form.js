import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Отримайте дані форми з formData та виконайте необхідні дії, наприклад, відправлення на сервер
    console.log("Дані форми:", formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {/* Ваш вміст компонента Desktop */}
      <form onSubmit={handleSubmit}>
        <label>
          Імя
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
}

export default Desktop;