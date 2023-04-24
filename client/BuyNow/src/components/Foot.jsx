import { Footer } from "flowbite-react"
import { BsTwitter, BsGithub } from "react-icons/bs"

const Foot = () => {
  return (
    <div className="fixed bottom-0 w-screen">
      <Footer container={true}>
        <div className="w-full">
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="BuyNow™"
              year={2022}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="#"
                icon={BsTwitter}
              />
              <Footer.Icon
                href="#"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  )
}

export default Foot
