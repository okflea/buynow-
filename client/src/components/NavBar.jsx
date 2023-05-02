import { UserButton, useUser } from "@clerk/clerk-react"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
          <div className="md:hidden">
            <button
              onClick={handleNavToggle}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={`${
            isNavOpen ? "block" : "hidden"
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
              to="/products"
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

// import { UserButton, useUser } from "@clerk/clerk-react"
// import { Navbar } from "flowbite-react"
// import React from "react"
// import { useNavigate } from "react-router-dom"


// const NavBar = () => {
//   const navigate = useNavigate()
//   const path = window.location.pathname
//   const { user } = useUser()

//   return (
//     <div >
//       <Navbar
//         fluid={true}
//         dark={true}
//       // rounded={true}
//       >
//         <Navbar.Brand
//         >
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="mr-3 h-6 sm:h-9"
//             alt="Flowbite Logo"
//           />
//           <span className="self-center text-slate-800 whitespace-nowrap text-xl font-semibold dark:text-slate-200">
//             BuyNow!
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse>
//           <Navbar.Link
//             onClick={() => navigate("/")}
//             active={path === "/"}
//           >
//             Home
//           </Navbar.Link>
//           <Navbar.Link
//             active={path === "/cars"}
//             onClick={() => navigate("/cars")}
//           >
//             Cars
//           </Navbar.Link>
//           <Navbar.Link
//             active={path === "/your-listed-cars"}
//             onClick={() => navigate("/your-listed-cars")}
//           >
//             Your Listed Cars
//           </Navbar.Link>
//           {user ? <UserButton /> :
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/login")}>
//               Sign In
//             </button>
//           }
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   )
// }

// export default NavBar
