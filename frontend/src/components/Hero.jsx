import React from 'react'
import Slider from "react-slick";
import Button from './Button';
const HeroSlide = [
  {
    id: 1,
    img: "burger.png",
    title: "King",
    title1: "Burger",
    description: "onent’s content.",
  },
  {
    id: 2,
    img: "thali.png",
    title: "Indian",
    title1: "Veg-Thali",
    description: "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
  },
  {
    id: 3,
    img: "pasta.png",
    title: "korian",
    title1: "Pasta",
    description: "Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.",
  },


]
function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='container pt-25'>

            <div className='overflow-hidden rounded-3xl
             min-h-[550px] sm:min-h[650px]  
            flex justify-center items-center
            bg-gradient-to-br from-orange-400/80
                    to-red-600/90'>

                <div className='container pb-8 sm:pb-0'>
                    <Slider{...settings}>
                        {HeroSlide.map((data) => (

                            <div key={data.id}>

                                <div className='grid grid-cols-1 sm:grid-cols-2 '>
                                    <div className='flex flex-col justify-center gap-4 
                                        sm:pl-3 pt-12 sm:pt-0 text-center
                                        sm:text-left order-2 sm:order-1'>

                                        {/* <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.title1}</h1> */}
                                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                        <h1 className='text-5xl text-white uppercase sm:text-[80px]
                                        md:text-[100px xl:text-[150px] font-bold '>{data.title1}</h1>
                                      
                                        {/* <h1>{data.description}</h1> */}

                                        <div>
                                           <Button 
                                           text="Order Now"
                                           bgColor="bg-primary"
                                           textColor="text-white"/>
                                        </div>
                                    </div>
                                   <div className='order-1 sm:order-2'>
                                     <div>
                                        <img src={data.img} alt="***"
                                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                                             sm:scale-105 lg:scale-110 object-contain mx-auto 
                                             drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] pr-10'/>
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
    )
}

export default Hero
