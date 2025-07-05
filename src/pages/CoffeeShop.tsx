import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Coffee {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
}

export default function CoffeeShop() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [cart, setCart] = useState<Coffee[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/coffees")
      .then((res) => setCoffees(res.data));
  }, []);

  const handleAddToCart = (coffee: Coffee) => {
    setCart((prev) => [...prev, coffee]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ☕ Qahvalar Menyusi
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Coffee Cards */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {coffees.map((coffee) => (
            <motion.div
              key={coffee.id}
              className="bg-white rounded-xl shadow p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {coffee.name}
              </h2>
              <p className="text-sm text-gray-500 mb-1">{coffee.type}</p>
              <p className="text-lg font-bold text-green-700">
                {coffee.price.toLocaleString()} so'm
              </p>
              <button
                onClick={() => handleAddToCart(coffee)}
                className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Savatchaga qo‘shish
              </button>
            </motion.div>
          ))}
        </div>

        {/* Cart */}
        <motion.div
          className="min-h-[300px] bg-white rounded-xl shadow-xl p-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">🛒 Savatcha</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Savatcha hozircha bo'sh</p>
          ) : (
            <>
              <ul className="space-y-2 text-sm text-gray-700">
                {cart.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price.toLocaleString()} so'm</span>
                  </li>
                ))}
              </ul>
              <hr className="my-4" />
              <div className="text-lg font-bold text-green-800">
                Jami: {total.toLocaleString()} so'm
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
