import React from "react";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Background"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-8"
        >
          <span className="block xl:inline">
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Welcome to{" "}
            </motion.span>
          </span>{" "}
          <span className="block text-slate-700 xl:inline">
            <motion.span
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              BuyNow!
            </motion.span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-base text-gray-300 md:text-lg mb-16"
        >
          We facilitate buying and selling of used cars at the best prices
        </motion.p>
      </div>
    </div>
  );
};

export default Heading;

// const Heading = () => {
//   return (
//     <div className="flex flex-col justify-center items-center p-6 m-6">
//       <h1 className="mb-4 text-5xl font-extrabold text-slate-700 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-500 from-sky-700">BuyNow!!!</span> or regret</h1>
//       <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">We facilitate buying and selling of used cars at the best prices</p>
//     </div>
//   )
// }
// export default Heading
