import { BrowserRouter, Route, Routes } from "react-router-dom"
import Foot from "./components/Foot"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Cars from "./pages/Cars"
import YourListedCars from "./pages/YourListedCars"
import { ClerkProvider, SignIn } from "@clerk/clerk-react"
import Edit from "./pages/Edit"
import Add from "./pages/Add"


const clerkPublicKey = import.meta.env.VITE_CLERK_PUBLIC_KEY
// const clerkPublicKey = CLERK_PUBLIC_KEY
console.log(clerkPublicKey)

function App() {

  return (
    <>
        <BrowserRouter>
        <ClerkProvider publishableKey={clerkPublicKey}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/login" element={<SignIn />} />

              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/add" element={<Add />} />
              <Route path="/your-listed-cars" element={<YourListedCars />} />
          </Routes>
          <Foot />
        </ClerkProvider>
        </BrowserRouter>
    </>
  )
}

export default App
