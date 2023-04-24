import { Toast } from "flowbite-react"

const Toas = () => {
  return (
    <div>
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
        </div>
        <div className="ml-3 text-sm font-normal">
          POST request not working as SSL certificate error 
        </div>
        <Toast.Toggle />
      </Toast>
    </div>
  )
}

export default Toas
