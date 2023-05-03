import { UserButton, useUser } from "@clerk/clerk-react"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";


const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { user } = useUser()
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">

              BuyNow!
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/cars"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Cars
              </Link>
              <Link
                to="/your-listed-cars"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Your Listings
              </Link>
              {user ?
                  <UserButton />
                :
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign In
                </Link>
              }
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleNavToggle}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              {isNavOpen ?

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -180,
                    borderRadius: "100%"
                  }}>
                  <FaTimes />
                </motion.div>
                :
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  whileTap={{
                    scale: 0.8,
                    rotate: -180,
                    borderRadius: "100%"
                  }}>
                  <FaBars />
                </motion.div>
              }
            </button>
          </div>
        </div>
        <div
          className={`${isNavOpen ? "block" : "hidden"
            } md:hidden transition-all ease-in-out duration-300`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/cars"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Cars
            </Link>
            <Link
              to="/your-listed-cars"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Your Listings
            </Link>
            {user ? <UserButton /> :
              <Link
                to="/login"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign In
              </Link>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

