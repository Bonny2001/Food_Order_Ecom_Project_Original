import React, { useContext } from 'react'
import { cartContext } from './cartContext'
import { useNavigate } from 'react-router-dom';
function Card() {

  // useContex 
  const { addCart, setAddCart } = useContext(cartContext)

  console.log(addCart);

  const navigator = useNavigate()
  // const sameOrder = () => {
  //   const elements = addCart.find((data)=>data.id === )
  // }
  return (
    <div>
      <div className="container  pt-20">

        {addCart.length === 0 ?
          <div className='text-center '>
            <h1 style={{ textAlign: "center", marginTop: "20px" }}>Your myCart is Empty</h1>
            <div onClick={() => navigator("/")}>
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded my-5 w-fit'>
                Click here to Shop More
              </button>
            </div>
          </div>
          :

          <div>

            {
              addCart.map((item) => (


                <div className="my-10 h-90 bg-white border border-gray-200 rounded-xl 
            shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">

                  <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden 
              pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                    <img className="size-fit rounded-4xl absolute top-5 left-5 start-0 object-cover "
                      src={item.strMealThumb} alt="Card Image" />
                  </div>
                  <div className="flex flex-wrap">
                    <div className="p-4 flex flex-col h-full sm:p-7">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {item.strMeal}
                      </h3>
                      <p className="mt-1 text-gray-500 dark:text-neutral-400">
                        Category: {item.strCategory}
                      </p>
                      <div className="mt-5 sm:mt-auto">
                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                          Ingredient: {item.strIngredient1} {item.strIngredient1} {item.strIngredient1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
          </div>
        }

      </div>
    </div>
  )
}

export default Card
