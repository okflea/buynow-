import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";


const Edit = () => {

  const carId = useParams();
  const [data, setData] = useState(null)

  const navigate=useNavigate()
  // console.log(`https://buynowserver-okflea.onrender.com/cars/${carId.id}`)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://odd-plum-duckling-sari.cyclic.app/api/cars/${carId.id}`);
        const dat = response.data;
        console.log(dat)
        setData(dat)
        setFormData({
          img: dat.img,
          color: dat.OEMspec.color,
          price: dat.MarketPlaceSpec.price,
          odometer: dat.MarketPlaceSpec.odometer,
          majorDamage: dat.MarketPlaceSpec.majorDamage,
          priorAccident: dat.MarketPlaceSpec.priorAccident,
          condition: dat.MarketPlaceSpec.condition
        })
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData();
  }, [])

  const [formData, setFormData] = useState({
    color: '',
    price: '',
    odometer: '',
    majorDamage: '',
    priorAccident: '',
    condition: '',
    img: '',
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData)
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://odd-plum-duckling-sari.cyclic.app/api/cars/${carId.id}`, {
        ...data,
        img: formData.img,
        MarketPlaceSpec: {
          price: Number(formData.price),
          odometer: Number(formData.odometer),
          majorDamage: formData.majorDamage,
          priorAccident: formData.priorAccident,
          condition: formData.condition,
        }
      })
      navigate('/your-listed-cars')
      // console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  if (data === null)
    return <p>Loading...</p>

  return (
    <div className="px-9">
      <h1>Edit {data.name} listing</h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-20 flex flex-col gap-4"
        onSubmit={handleSubmit}>
        <label>Image Url:</label>
        <input type="text" placeholder={data.img} name="img" value={formData.img} onChange={handleChange} />
        <label>Price:</label>
        <input type="number" placeholder={data.MarketPlaceSpec.price} name="price" value={formData.price} onChange={handleChange} />
        <label>Odometer:</label>
        <input type="number" placeholder={data.MarketPlaceSpec.odometer} name="odometer" value={formData.odometer} onChange={handleChange} />
        <label>Major Damage:</label>
        <select name="majorDamage" value={formData.majorDamage} onChange={handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label>Prior Accident:</label>
        <select name="priorAccident" value={formData.priorAccident} onChange={handleChange}>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label>Condition:</label>
        <input type="text" placeholder={data.MarketPlaceSpec.condition} name="condition" value={formData.condition} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Edit
