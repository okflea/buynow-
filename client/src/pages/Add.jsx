import axios from "axios";
import { useState } from "react";
import Toas from "../components/Toas";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    // setError(true);

    try {
      const response = await axios.post(`https://odd-plum-duckling-sari.cyclic.app/api/cars/add`, {
        name: formData.name,
        OEMspec: {
          manufacturer: formData.manufacturer,
          model: formData.model,
          year: Number(formData.year),
          transmission: formData.transmission,
          fuel: formData.fuel,
          color: formData.color,
          power: formData.power,
          torque: formData.torque,
          topSpeed: formData.topSpeed,
        },
        MarketPlaceSpec: {
          price: Number(formData.price),
          odometer: Number(formData.odometer),
          majorDamage: formData.majorDamage,
          priorAccident: formData.priorAccident,
          condition: formData.condition,
        },
        img: formData.img,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    navigate("/your-listed-cars")
  }
  // const [error, setError] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    manufacturer: '',
    model: '',
    year: '',
    transmission: '',
    fuel: '',
    color: '',
    power: '',
    torque: '',
    topSpeed: '',
    price: '',
    odometer: '',
    majorDamage: '',
    priorAccident: '',
    condition: '',
    img: '',
  })
  
  return (
    <div>
      <div className="px-9">
        <h1>Add New listing</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-20 flex flex-col gap-4"
          onSubmit={handleSubmit}>

          <label>Name:</label>
          <input type="text" required name="name" value={formData.name} onChange={handleChange} />
          <label>Manufacturer:</label>
          <input type="text" required name="manufacturer" value={formData.manufacturer} onChange={handleChange} />

          <label>Model:</label>
          <input type="text" required name="model" value={formData.model} onChange={handleChange} />
          <label>Year:</label>
          <input type="number" required name="year" value={formData.year} onChange={handleChange} />

          <label>Transmission:</label>
          <input type="text" required name="transmission" value={formData.transmission} onChange={handleChange} />
          <label>Fuel:</label>
          <input type="text" required name="fuel" value={formData.fuel} onChange={handleChange} />
          <label>Color:</label>
          <input type="text" required name="color" value={formData.color} onChange={handleChange} />
          <label>Power:</label>
          <input type="text" required name="power" value={formData.power} onChange={handleChange} />
          <label>Torque:</label>
          <input type="text" required name="torque" value={formData.torque} onChange={handleChange} />
          <label>Top Speed:</label>
          <input type="text" required name="topSpeed" value={formData.topSpeed} onChange={handleChange} />
          <label>Image Url:</label>
          <input type="text" required name="img" value={formData.img} onChange={handleChange} />
          <label>Price:</label>
          <input type="number" required name="price" value={formData.price} onChange={handleChange} />
          <label>Odometer:</label>
          <input type="number" required name="odometer" value={formData.odometer} onChange={handleChange} />
          <label>Major Damage:</label>
          <select name="majorDamage" required value={formData.majorDamage} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label>Prior Accident:</label>
          <select name="priorAccident" required value={formData.priorAccident} onChange={handleChange}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <label>Condition:</label>
          <input type="text" required name="condition" value={formData.condition} onChange={handleChange} />
          <button type="submit">Submit</button>
          {/* {error && <Toas />} */}
        </form>

      </div>
    </div>
  )
}

export default Add
