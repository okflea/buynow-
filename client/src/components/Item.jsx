import { Card } from "flowbite-react"
import { useNavigate } from "react-router-dom"

const Item = (props) => {

  const { data,edit } = props

  const navigate = useNavigate()
  const handleEdit = () => {
    if(edit=="true"){
      navigate(`/edit/${data._id}` )
    }
  }
  return (
    <div className="max-w-sm">
      <Card
        imgAlt={data.name}
        imgSrc={data.img}
      >
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {`${data.name} ${data.OEMspec.year}`}
          </h5>
        </a>
        <p>{`Mileage : ${data.MarketPlaceSpec.odometer}km`}</p>
        <p>{`paintjob : ${data.OEMspec.color}`}</p>
        <p>{`Power : ${data.OEMspec.power}`}</p>
        <p>{`Torque : ${data.OEMspec.torque}`}</p>
        <div className="mt-2 mb-5 flex items-center">
          <p>Condition :</p>
          {[1, 2, 3, 4, 5].map((i) => {
            if (i <= data.MarketPlaceSpec.condition) {
              return (
                //yellow star
                <svg
                  key={i}
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )
            } else {
              return (
                //grey star
                <svg
                  key={i}
                  className="h-5 w-5 text-slate-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )
            }
          }
          )}
          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {data.MarketPlaceSpec.condition}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {`₹${data.MarketPlaceSpec.price}`}
          </span>
          <button
            onClick={handleEdit}
            className="rounded-lg bg-teal-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {edit==="true" ? "Edit" : "Buy Now"}
          </button>
        </div>
      </Card>
    </div>
  )
}

export default Item
