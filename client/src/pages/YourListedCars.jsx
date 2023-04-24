import { RedirectToSignIn, UserButton, useUser } from "@clerk/clerk-react"
import Item from "../components/Item"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const YourListedCars = () => {
 
  const navigate = useNavigate()
  const [data, setData] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('https://odd-plum-duckling-sari.cyclic.app/api/cars');
        const data = response.data;
        // console.log(data)
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const { user } = useUser()
  if (!user) {
    return <RedirectToSignIn />
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{`Hello ${user.firstName} , Welcome !!`}</p>
      <p>You can make changes to your Car listings here</p>

      {/* <button  */}
      {/*   onClick={() => { */}
      {/*     navigate('/add') */}
      {/*   }} */}
      {/*   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> */}
      {/* Add New listing */}
      {/* </button> */}
      <div className="flex flex-row justify-center items-center gap-2 flex-wrap p-5 mb-16">
        {data.map((item) => (
          <Item edit="true" key={item._id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default YourListedCars
