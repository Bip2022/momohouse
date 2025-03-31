import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";

function ProductDescription() {
  const { dispatch } = useContext(cartContext);
  const { id } = useParams();
  const [products, setProducts] = useState(null);  // Changed to null
  const [error, setError] = useState(null);  // Added error state
  console.log(id);

  // Function to fetch product data
  const getSingleProduct = async () => {
    try {
      let res = await fetch(`https://dummyjson.com/recipes/${id}`);
      res = await res.json();
      setProducts(res); 
      console.log(res);
       // Set product data to state
    } catch (e) {
      console.log("Error while fetching data", e); // Corrected error setting
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

 

  return (
    <>
      <div className="w-[100%] m-auto px-4 sm:px-4 md:px-4 lg:px-14 py-7 sm:py-7 md:py-7 lg:py-14">
        {products ? (
          <div className="flex flex-col sm:flex-col md:flex-row justify-around shadow-[0px_6px_21px_0px_rgba(0,_0,_0,_0.1)]">
            <div className="w-[100%] sm:w-[100%] md:w-[50%] bg-[#fcfbfb] flex flex-col p-5 mb-10 sm:mb-10 md:mb-0">
              <img
                src={products.image}
                className="w-32 sm:w-32 h-32 sm:h-32 m-auto lg:m-0 lg:ml-10 rounded-[50%] shadow-[0px_4px_21px_0px_rgba(0,_0,_0,_0.1)]"
                alt={products.name || 'Product Image'}  // Added alt text for better accessibility
              />
              <div className="flex flex-col ml-0 sm:ml-0 md:ml-10 mt-7">
                <p className="font-primary-head font-medium text-[16px] mb-1.5">{products.name}</p>
                <p className="font-primary-head font-bold text-[21px] text-[#D95103] mb-1.5">Rs. {products.caloriesPerServing}</p>
                <p className="font-primary-head font-medium text-[16px] mb-5">Rating: {products.rating}</p>
                <div>
                  <button className="font-primary-head font-medium p-3 bg-black text-white cursor-pointer">
                    Buy Now
                  </button>

                  <button
                    onClick={() => {
                      dispatch({ type: "AddToCart", payload: products });
                    }}
                    className="font-primary-head font-medium p-3 ml-4 bg-red-600 text-white cursor-pointer"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f4f4] p-5 w-[100%] sm:w-[100%] md:w-[50%]">
              <div className="font-primary-head text-[15px] tracking-wide">
                <h1 className="text-[19px] sm:text-[19px] md:text-[23px] text-[#0C6967] font-extrabold">Product Description</h1>
                <p className="mb-1 font-medium">Meal-Type: {products.mealType[0]}</p>
                <p className="mb-1 font-medium">Cook Time: {products.cookTimeMinutes} Minutes</p>
                <p className="mb-1 font-medium">Cuisine: {products.cuisine}</p>
                <p className="mb-1 font-medium">Difficulty: {products.difficulty}</p>
              </div>

              <h1 className="font-primary-head text-[19px] sm:text-[19px] md:text-[23px] mt-4 text-[#0C6967] font-extrabold tracking-wide">
                Ingredients:
              </h1>
              <p className="font-primary-head font-normal mt-2 p-1 flex flex-col flex-wrap ">
                {
                  products.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                  </p>
                  </div>
                  </div>
                ) : (
                
          <div className="font-primary-head font-normal text-[17px] text-center">Loading...</div>
        )}
      </div>
    </>
  );
}

export default ProductDescription;
