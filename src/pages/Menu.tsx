import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

// Coffee type
interface Menyu {
  id: number;
  name: string;
  type: string;
  origin: string;
  price: number;
  description: string;
  image: string;
}

export default function Menyu() {
  const [coffees, setCoffees] = useState<Menyu[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Fetch data from db.json (json-server)
  useEffect(() => {
    axios.get("http://localhost:3000/coffees").then((res) => {
      setCoffees(res.data);
    });
  }, []);

  // Unique types for filtering dropdown
  const types = ["All", ...new Set(coffees.map((coffee) => coffee.type))];

  // Filtering and searching logic
  const filteredCoffees = coffees.filter((coffee) => {
    const matchesSearch = coffee.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || coffee.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        ☕ Qahvalar Menyusi
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-8">
        <input
          type="text"
          placeholder="Qidirish: espresso, latte..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {types.map((t) => (
            <option key={t} value={t}>
              {t === "All" ? "Barchasi" : t}
            </option>
          ))}
        </select>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCoffees.map((coffee, index) => (
          <motion.div
            key={coffee.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4"
          >
            <img
              src={coffee.image}
              alt={coffee.name}
              className="h-48 w-full object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {coffee.name}
            </h2>
            <p className="text-gray-500 text-sm mb-1">
              {coffee.origin} — {coffee.type}
            </p>
            <p className="text-gray-600 text-sm mb-2">{coffee.description}</p>
            <span className="text-blue-600 font-bold">
              {coffee.price.toLocaleString()} so'm
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
