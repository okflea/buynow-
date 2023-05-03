import Item from "../components/Item"
// import mockData from "../mockData"
import FilterDropdown from "../components/FilterDropdown"
import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

const Cars = () => {


  const [data, setData] = useState([])
  const [reset, setReset] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('https://odd-plum-duckling-sari.cyclic.app/api/cars');
        const data = response.data;
        // console.log(data)
        setData(data)
        setReset(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className="flex justify-center items-start flex-wrap gap-1 pt-7">
        <p className="pt-2 text-slate-400">Filter by :</p>
        <FilterDropdown title="Price" items={["<₹1000000", "<₹1200000", "<₹1500000", "<₹2000000"]} setChange={setData} />
        <FilterDropdown title="Color" items={["Red", "Black", "White", "Blue"]} setChange={setData} />
        <FilterDropdown title="Mileage" items={["<50000km", "<100000km", "<150000km"]} setChange={setData} />

        <motion.button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setData(reset)}
        >
          clear
        </motion.button>
      </div>
      <div className="flex flex-row justify-center items-center gap-2 flex-wrap p-5 mb-16">
        {data.map((item) => (
          <Item edit='false' key={item._id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Cars
