import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">&copy; 2023 Buynow!. All rights reserved.</p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
              <AiFillGithub size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-150 ease-in-out">
              <AiFillTwitterCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { Footer } from "flowbite-react"
// import { BsTwitter, BsGithub } from "react-icons/bs"

// const Foot = () => {
//   return (
//     <div className="fixed bottom-0 w-screen">
//       <Footer container={true}>
//         <div className="w-full">
//           <div className="w-full sm:flex sm:items-center sm:justify-between">
//             <Footer.Copyright
//               href="#"
//               by="BuyNow™"
//               year={2022}
//             />
//             <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
//               <Footer.Icon
//                 href="#"
//                 icon={BsTwitter}
//               />
//               <Footer.Icon
//                 href="#"
//                 icon={BsGithub}
//               />
//             </div>
//           </div>
//         </div>
//       </Footer>
//     </div>
//   )
// }

// export default Foot
