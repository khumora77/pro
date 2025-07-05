import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="w-full bg-[#f9f3ec] py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Life Begins After Coffee
          </h1>
          <p className="text-gray-600 text-lg">
            Because great coffee is the start of something even greater.
          </p>
          <div className="flex gap-4">
            <a
              href="/menu"
              className="bg-[#dbc4a1] text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-[#c9b089] transition"
            >
              Explore Menu
            </a>
            <a
              href="/locations"
              className="border-2 border-[#dbc4a1] text-[#7c644b] px-6 py-3 rounded-xl font-medium hover:bg-[#dbc4a1] hover:text-gray-900 transition"
            >
              Our Locations
            </a>
          </div>
        </motion.div>

        {/* Images Section */}
        <motion.div
          className="flex-1 flex items-center justify-center relative"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-[300px] h-[360px] flex items-center justify-center">
            {/* Left Rotated Image */}
            <motion.img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c56b860fe106f68269_Black%20Coffee.avif"
              alt="Black Coffee"
              className="w-32 h-44 object-cover rounded-xl absolute left-0 top-12 shadow-md"
              initial={{ rotate: -15, opacity: 0 }}
              animate={{ rotate: -7, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />

            {/* Center Main Image */}
            <motion.img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c5a407d033860da151_Espresso.avif"
              alt="Espresso"
              className="w-40 h-56 object-cover rounded-xl z-10 shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />

            {/* Right Rotated Image */}
            <motion.img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c5977f8055b117d3fa_Cold%20Brew.avif"
              alt="Cold Brew"
              className="w-32 h-44 object-cover rounded-xl absolute right-0 top-12 shadow-md"
              initial={{ rotate: 15, opacity: 0 }}
              animate={{ rotate: 7, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
