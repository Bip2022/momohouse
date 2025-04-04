import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";

function ProductDescription() {
  const { dispatch } = useContext(cartContext);
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  const getSingleProduct = async () => {
    try {
      let res = await fetch(`https://dummyjson.com/recipes/${id}`);
      res = await res.json();
      setProducts(res);
    } catch (e) {
      setError("Failed to load product");
      console.log("Error while fetching data", e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  return (
    <div className="w-[100%] m-auto px-4 py-7 lg:px-14 lg:py-14">
      {products ? (
        <div className="flex flex-col md:flex-row justify-around shadow-[0px_6px_21px_0px_rgba(0,_0,_0,_0.1)]">
          {/* Product Image and Actions */}
          <div className="w-full md:w-[50%] bg-[#fcfbfb] flex flex-col p-5 mb-10 md:mb-0">
            <img
              src={products.image}
              className="w-32 h-32 m-auto lg:ml-10 rounded-[50%] shadow-[0px_4px_21px_0px_rgba(0,_0,_0,_0.1)]"
              alt={products.name}
            />
            <div className="ml-0 md:ml-10 mt-7">
              <p className="font-primary-head font-medium text-[16px] mb-1.5">{products.name}</p>
              <p className="font-primary-head font-bold text-[21px] text-[#D95103] mb-1.5">
                Rs. {products.caloriesPerServing}
              </p>
              <p className="font-primary-head font-medium text-[16px] mb-5">Rating: {products.rating}</p>
              <div>
                <button className="font-primary-head font-medium p-3 bg-black text-white cursor-pointer">
                  Buy Now
                </button>
                <button
                  onClick={() => dispatch({ type: "AddToCart", payload: products })}
                  className="font-primary-head font-medium p-3 ml-4 bg-red-600 text-white cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-[#f5f4f4] p-5 w-full md:w-[50%]">
            <div className="font-primary-head text-[15px] tracking-wide">
              <h1 className="text-2xl text-[#0C6967] font-extrabold">Product Description</h1>
              <p className="mb-1 font-medium">Meal-Type: {products.mealType[0]}</p>
              <p className="mb-1 font-medium">Cook Time: {products.cookTimeMinutes} Minutes</p>
              <p className="mb-1 font-medium">Cuisine: {products.cuisine}</p>
              <p className="mb-1 font-medium">Difficulty: {products.difficulty}</p>
            </div>

            <h1 className="font-primary-head text-2xl mt-4 text-[#0C6967] font-extrabold">
              Ingredients:
            </h1>
            <ul className="font-primary-head font-normal mt-2 p-1">
              {products.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="font-primary-head text-center text-lg">
          {error || "Loading..."}
        </div>
      )}
    </div>
  );
}

export default ProductDescription;