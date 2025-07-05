import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="w-full h-[800px] bg-[#f9f3ec] py-16 px-4 md:px-20 flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Life Begins After Coffee
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Because great coffee is the start of something even greater.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="/menyu"
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

        {/* Right: Images */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex justify-center items-center gap-4"
        >
          {/* Left image */}
          <motion.img
            src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c56b860fe106f68269_Black%20Coffee.avif"
            alt="Black Coffee"
            className="w-28 h-40 object-cover rounded-xl shadow-md hidden md:block"
            initial={{ rotate: -12, opacity: 0 }}
            animate={{ rotate: -6, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

          {/* Center image */}
          <motion.img
            src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c5a407d033860da151_Espresso.avif"
            alt="Espresso"
            className="w-36 h-52 object-cover rounded-xl shadow-lg z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          {/* Right image */}
          <motion.img
            src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fcd4c5977f8055b117d3fa_Cold%20Brew.avif"
            alt="Cold Brew"
            className="w-28 h-40 object-cover rounded-xl shadow-md hidden md:block"
            initial={{ rotate: 12, opacity: 0 }}
            animate={{ rotate: 6, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </main>
  );
}
