import React from 'react'
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle
} from "react-icons/fa"

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl mb:text-5xl text-primary' />,
        title:"Free Shipping",
        description:"Free Shiping on All Order",

    },
      {
        id: 2,
        icon: <FaHeadphonesAlt className='text-4xl mb:text-5xl text-primary' />,
        title:"Customer Support",
        description:"Free Customer Support 24 hours",

    },
      {
        id: 3,
        icon: <FaWallet className='text-4xl mb:text-5xl text-primary' />,
        title:"Secure Payment",
        description:"Trusted Payment Partner ",

    },
       {
        id: 4,
        icon: <FaCheckCircle className='text-4xl mb:text-5xl text-primary' />,
        title:"Quality Food",
        description:"Fresh Food with proper package",

    },
]


function Services() {
  return (
    <div >
      <div className="container my-14 mb:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 text-center">
            {
                ServiceData.map((data)=>(
                  <div key={data.id} className="flex flex-col items-center sm:flex-row gap-4 pl-5 ">
                    {data.icon}
                    <div>
                        <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                        <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                    </div>
                  </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Services
