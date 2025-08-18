import React, { useEffect, useState } from 'react'
import axios from "axios";
import Heading from './Heading'
import ProductsCard from './ProductsCard'

const ProductData = [
  {
    id: 1,
    title: "Hello",
    price: "232",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png"
  },
  {
    id: 2,
    title: "Hello",
    price: "232",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png"
  },
  {
    id: 3,
    title: "Hello",
    price: "232",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png"
  },
  {
    id: 4,
    title: "Hello",
    price: "232",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png"
  },
]
function Products({ showData, setShowData  }) {

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
    MyapiFunction();33

  }, []);

  return (
    <div >
      <div className='container '>
        {/* Header Section  */}
        <Heading  
          title="Out product"
          subtitle="Explore  our Product" />

        {/* Body Section  */}
        <ProductsCard data={showData}   />
        {/* <ProductsCard data={showData}   /> */}
        
        {/* API DATA  */}
      </div>
    </div>
  )
}

export default Products
