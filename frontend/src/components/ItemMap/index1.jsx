import React from 'react'

function index1({ cartItems }) {
    const ADDItem =(id)=>{
        cartItems((e)=>{
            e.map((item)=>item.id === id ? {...item, quantity: item.quantity + 1} : item)
        })
    }
    return (
        <div>
            {cartItems.map((item) => (
                <div
                    key={item.idMeal}
                    className="my-10 h-90 bg-white border border-gray-200 rounded-xl 
                shadow-2xs sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
                >
                    <div
                        className="shrink-0 relative w-full rounded-t-xl overflow-hidden 
                  pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs"
                    >
                        <img
                            className="size-fit rounded-4xl absolute top-5 left-5 start-0 object-cover "
                            src={item.strMealThumb}
                            alt="Card Image"
                        />
                    </div>
                    <div className="flex flex-wrap">
                        <div className="p-4 flex flex-col h-full sm:p-7">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                {item.strMeal}{" "}
                                <span className="text-sm text-red-500">
                                    (x{item.quantity})
                                </span>
                            </h3>
                            <p className="mt-1 text-gray-500 dark:text-neutral-400">
                                Category: {item.strCategory}
                            </p>
                            <div className="mt-5 sm:mt-auto">
                                <div className="buttom  pb-1">
                                    <button className='bg-primary text-white font-bold px-4 m-1 rounded-full border'
                                        onClick={() => ADDItem(item.idMeal) }
                                    >+</button>
                                    <button className='bg-green-700 text-white font-bold 
                    px-4 m-1 rounded-md border'> {item.quantity}</button>
                                    <button className='bg-primary text-white font-bold px-4 m-1 rounded-full border'
                                        // onClick={() => Decrease(item.idMeal)}
                                    >-</button>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-neutral-500">
                                    Ingredient: {item.strIngredient1} {item.strIngredient2}{" "}
                                    {item.strIngredient3}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default index1
