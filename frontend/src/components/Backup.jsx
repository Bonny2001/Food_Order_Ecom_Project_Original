import React, { useEffect } from 'react'

import Slider from 'react-slick'
import Button from './Button'
import Heading from './Heading'
import axios from 'axios'
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle
} from "react-icons/fa"

        console.log(myCart);
const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xl mb:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free Shiping on All Order",

  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className='text-4xl mb:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free Shiping on All Order",

  },
  {
    id: 3,
    icon: <FaWallet className='text-4xl mb:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free Shiping on All Order",

  },
  {
    id: 4,
    icon: <FaCheckCircle className='text-4xl mb:text-5xl text-primary' />,
    title: "Free Shipping",
    description: "Free Shiping on All Order",

  },
]


const HeroSlide = [
  {
    id: 1,
    img: "burger.png",
    title: "Get the latest BURGERS ",
    title1: "Single  Decker",
    title2: "Burger",
    description: "onent’s content.",
  },
  {
    id: 2,
    img: "thali.png",
    title: "Indian",
     title1: "Bengali",
    title2: "VEG THALI",
    description: "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
  },
  {
    id: 3,
    img: "pasta.png",
    title: "PAKORA",
     title1: "Japanes",
    title2: "PASTA",
    description: "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
  },


]
function Home({ showData, setShowData, addCard, setAddCart }) {


  const addCart = (idMeal, strMealThumb, strMeal, strArea, strInstructions) => {
    const obj = {
      idMeal, strMealThumb, strMeal, strArea, strInstructions
    }
    setAddCart([...addCard, obj])
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  const MyapiFunction = async () => {

    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
      const meals = response.data.meals || [];
      //   setOriginalData(meals);
      console.log(response);

      setShowData(meals);
      console.log(showData);
    } catch (error) {
      console.error("API Error", error);
    }
  }
  useEffect(() => {
    MyapiFunction(); 33

  }, []);

  return (
    <>
      <div>
        <div className='container'>

          <div className='overflow-hidden rounded-3xl
             min-h-[550px] sm:min-h[650px] 
            flex justify-center items-center 
             bg-gradient-to-br from-yellow-600/90
                    to-green-400/90
            '>

            <div className='container pb-8 sm:pb-0
            '>
              <Slider{...settings}>
                {HeroSlide.map((data) => (

                  <div key={data.id}>

                    <div className='grid grid-cols-1 sm:grid-cols-2 
                    '>
                      <div className='flex flex-col justify-center gap-4 
                                        sm:pl-3 pt-12 sm:pt-0 text-center
                                        sm:text-left order-2 sm:order-1
                                        '>

                        {/* <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold pl-2'>{data.title}</h1> */}
                        <h1  className='text-5xl sm:text-6xl lg:text-7xl font-bold pl-3'>{data.title1}</h1>
                        <h1 className='text-5xl text-white uppercase sm:text-[80px]
                                        md:text-[100px xl:text-[150px] font-bold '>{data.title2}</h1>

                        {/* <h1>{data.description}</h1> */}

                        <div>
                          <Button
                            text="Order Now"
                            bgColor="bg-primary"
                            textColor="text-white" />
                        </div>
                      </div>
                      <div className='order-1 sm:order-2'>
                        <div>
                          <img src={data.img} alt="***"
                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                                             sm:scale-105 lg:scale-110 object-contain mx-auto 
                                             drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]'/>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
                }

              </Slider>
            </div>
          </div>
        </div>
        {/* <Category /> */}

        <div className='py-8'>
          <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
              {/* First Col  */}
              <div className='py-10 pl-5 bg-gradient-to-br from-black/90
                    to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                  <div className='mb-4'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>with</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                    <Button
                      text="Browser"
                      bgColor={"bg-primary"}
                      textColor={"text-white"} />
                  </div>
                </div>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png" alt="" className='w-[320px]  absolute bottom-0 ' />
              </div>


              {/* Second Col */}
              <div className='py-10 pl-5 bg-gradient-to-br from-yellow-300/90
                        to-yellow-300/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                  <div className='mb-4'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>with</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                    <Button
                      text="Browser"
                      bgColor={"bg-white"}
                      textColor={"text-yellow-600"} />
                  </div>
                </div>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png" alt=""
                  className='w-[250px]  absolute -right-4 lg:top-[40px]' />
              </div>


              {/* Third COl  */}
              <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-red-500/90
                        to-red-500/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                  <div className='mb-4'>
                    <p className='mb-[2px] text-gray-400'>Enjoy</p>
                    <p className='text-2xl font-semibold mb-[2px]'>with</p>
                    <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                    <Button
                      text="Browser"
                      bgColor={"bg-white"}
                      textColor={"text-red-600"} />
                  </div>
                </div>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png" alt=""
                  className='w-[250px]  absolute top-1/2 -translate-y-1/2 -right-0' />
              </div>



            </div>
          </div>
        </div>


        {/* <Services /> */}


        <div className=''>
          <div className="container my-14 mb:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
              {
                ServiceData.map((data) => (
                  <div key={data.id} className="flex flex-col items-center sm:flex-row gap-4 justify-center">
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



        {/* <Products showData={showData} setShowData={setShowData} addCard={addCard} setAddCart={setAddCart}/> */}

        <div>
          <div className='container'>
            {/* Header Section  */}
            <Heading
              title="Out product"
              subtitle="Explore our Product" />

            {/* Body Section  */}
            {/* <ProductsCard data={showData} addCard={addCard} setAddCart={setAddCart}  /> */}

              

            <div className='mb-10'>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 place-items-center'>
                {/* Card Section */}
                {
                  showData.map((data) => (
                    <div className='group' key={data.idMeal}>
                      <div className='relative space-y-3'>
                        <img src={data.strMealThumb} alt="" className='h-[150px] w-[160px] object-cover rounded-md' />
                        <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
              w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 h-full rounded'>

                          <button
                            className={`bg-orange-400 text-white
                    curser-pointer hover:scale-105 duration-300
                    py-2 px-8 rounded-full relative z-10 `}
                            onClick={() =>
                              addCart(data.idMeal, data.strMealThumb, data.strMeal, data.strArea, data.strInstructions)}
                          >Order</button>

                        </div>
                      </div>
                      <div className='leading-7 text-center'>
                        <h2 className='font-bold'>{data.strMeal}</h2>
                        <p className='text-xs'>{data.strArea}</p>
                      </div>
                    </div>

                  ))
                }

              </div>
            </div>

            {/* API DATA  */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
