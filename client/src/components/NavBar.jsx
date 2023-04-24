import { UserButton, useUser } from "@clerk/clerk-react"
import { Navbar } from "flowbite-react"
import React from "react"
import { useNavigate } from "react-router-dom"


const NavBar = () => {
  const navigate = useNavigate()
  const path = window.location.pathname
  const { user } = useUser()

  return (
    <div >
      <Navbar
        fluid={true}
      // rounded={true}
      >
        <Navbar.Brand
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-slate-800 whitespace-nowrap text-xl font-semibold dark:text-slate-200">
            BuyNow!
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            onClick={() => navigate("/")}
            active={path === "/"}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            active={path === "/cars"}
            onClick={() => navigate("/cars")}
          >
            Cars
          </Navbar.Link>
          <Navbar.Link
            active={path === "/your-listed-cars"}
            onClick={() => navigate("/your-listed-cars")}
          >
            Your Listed Cars
          </Navbar.Link>
          {user ? <UserButton /> :
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate("/login")}>
              Sign In
            </button>
          }
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
