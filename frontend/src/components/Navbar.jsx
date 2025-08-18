import React, { useContext } from 'react'
import { IoMdSearch } from "react-icons/io"
import { FaShoppingCart } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom'
import { cartContext } from './cartContext'
import Button from './Button'

const MenuLink = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Shop",
        link: "/#shop"
    },
    {
        id: 3,
        name: "About",
        link: "/#about"
    },
    // {
    //     id: 4,
    //     name: "Card",
    //     link: "/card"
    // },
]
function Navbar() {

    //   const {addCart , setAddCart} = useContext(cartContext)
    const { addCart, setAddCart } = useContext(cartContext)
    const navigate = useNavigate()

    return (
        <div className="
        bg-white  
        dark:bg-gray-900
        dark:text-white
        shadow-md fixed top-0 left-0 right-0 z-50
        fixed w-full z-50
        ">
            <div className='py-4 '>

                <div className="container flex justify-between">
                    {/* {Logo and Link Section} */}
                    <div className='flex gap-4 items-center'>
                        <a href="/"
                            className='text-primary 
                            font-semibold tracking-widest
                            text-2xl uppercase sm:text-3xl'
                            style={{ fontFamily: "Bebas Neue , sans-serif" }}
                        >Foodify</a>
                        <div>

                            {/* Menu Item */}

                            <div className='hidden lg:block'>
                                <ul className='flex items-center gap-4'>
                                    {MenuLink.map((data, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => navigate(data.link)}
                                                href={data.link}

                                                className='
                                                inline-block px-4
                                                font-semibold text-gray-500
                                                hover:text-black 
                                                dark:hover:text-white duration-200'>{data.name}
                                            </button>
                                        </li>


                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* {Navbar Right Section} */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar Section */}
                        <div className=' relative group hidden sm:block'>
                            <input type="text" placeholder='Search'
                                className='search-bar' />
                            <IoMdSearch
                                className='text-xl text-gray-600 dark:text-gray-400
                                 group-hover:text-primary duration-200 
                                 absolute top-1/2 -translate-y-1/2 right-3'/>
                        </div>
                        {/* Dark Mode Section */}
                        <button
                            onClick={() => navigate("/register")}
                            className={` bg-primary text-gray-100
                             curser-pointer hover:scale-105 duration-300
                             py-1 px-6 rounded-full relative z-10 `}
                        >Join Now</button>
                        {/* <Link to={'/card'}> */}
                        <button
                            onClick={() => navigate("/card")}
                            className='relative p-3'
                        // href="/card"
                        >
                            <FaShoppingCart
                                className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white
                                rounded-full absolute top-0 right-0 flex items-center
                                justify-center text-xs'>
                                {addCart.length}
                            </div>
                        </button>

                        {/* </Link> */}






                        {/* Dark Mode Section */}
                        <div></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
