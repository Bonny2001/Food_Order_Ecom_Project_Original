import React, { useContext } from "react";
import { cartContext } from "./cartContext";
import { useNavigate } from "react-router-dom";
import Item_Map from "../components/ItemMap/index1.jsx";
function NewCart({showData}) {
    const { addCart } = useContext(cartContext);
    const navigator = useNavigate();
    const [newAddCart, setAddCart] = React.useState();


    // Group items and count duplicates
    const groupedCart = addCart.reduce((acc, item) => {
        if (acc[item.idMeal]) {
            acc[item.idMeal].quantity += 1;
        } else {
            acc[item.idMeal] = { ...item, quantity: 1 };
        }
        return acc;
    }, {});

    // Convert object → array
    const cartItems = Object.values(groupedCart);
    console.log(cartItems);
    const ADDItem = (id) => {
        // addCart((e) => {
        //     e.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
        // })
        showData.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    }

    return (
        <div className="mt-20">
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
                                        onClick={() => ADDItem(item.idMeal)}
                                    >Add</button>
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
            <div className='col-4 absolute fixed right-5 bottom-5 
      p-3 pr-5 bg-primary font-bold rounded-lg text-white'>
                <div className='row'>
                    <h5>Total Items: 0</h5>
                    <h5>Total price: $0 </h5>
                </div>

            </div>
        </div>
    )
}

export default NewCart
