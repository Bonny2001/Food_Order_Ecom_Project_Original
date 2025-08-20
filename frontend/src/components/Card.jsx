import React, { useContext } from 'react'
import { cartContext } from './cartContext'
import { useNavigate } from 'react-router-dom';
import Item_Map from "./ItemMap/index.jsx";

import { CartContext } from '../components/Features/ContexProvider.jsx'

// import CartProduct from '../Components/CartProduct'
function Card() {

  // useContex 
  // const { addCart, setAddCart } = useContext(cartContext)

  const {cart} = useContext(CartContext)

  const navigator = useNavigate()
  // const sameOrder = () => {
  //   const elements = addCart.find((data)=>data.id === )
  // }
  return (
    <>
      <div className="container relative pt-20">
        {cart.length === 0 ?
          <div className='text-center '>
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>Your myCart is Empty</h1>
            <div onClick={() => navigator("/")}>
              <button className='bg-red-500 hover:bg-red-700 text-white
               font-bold py-2 px-4 border border-red-700 rounded my-5 w-fit'>
                Click here to Shop More
              </button>
            </div>
          </div>
          :
          <div className='row'>
           {<Item_Map />}
            <div className='col-4 absolute fixed right-5 bottom-5 p-3 pr-5 bg-primary font-bold rounded-lg text-white'>
              <div className='row'>
                <h5>Total Items: 0</h5>
                <h5>Total price: $0 </h5>
              </div>

            </div>
          </div>
        }

      </div>
    </>
  )
}

export default Card
