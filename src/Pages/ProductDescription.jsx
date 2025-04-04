import { useContext, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";
import { debounce } from "lodash";

function ProductDescription() {
  const { dispatch } = useContext(cartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  // Fetch single product details
  const getSingleProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (e) {
      console.error("Error while fetching data:", e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  // Debounced Add to Cart function
  const handleAddToCart = useCallback(
    debounce((product) => {
      dispatch({ type: "AddToCart", payload: product });
    }, 500),
    [dispatch]
  );

  return (
    <div className="w-full m-auto px-4 lg:px-14 py-7 lg:py-14">
      {product ? (
        <div className="flex flex-col md:flex-row justify-around shadow-md">

          {/* Product Image & Info */}
          <div className="w-full md:w-1/2 bg-[#fcfbfb] flex flex-col p-5 mb-10 md:mb-0">
            <img
              src={product.image}
              className="w-32 h-32 m-auto lg:ml-10 rounded-full shadow-md"
              alt={product.name}
            />
            <div className="flex flex-col mt-7 md:ml-10">
              <p className="font-medium text-lg">{product.name}</p>
              <p className="font-bold text-xl text-[#D95103]">Rs. {product.caloriesPerServing}</p>
              <p className="font-medium text-lg">Rating: {product.rating}</p>

              {/* Buttons */}
              <div className="mt-5">
                <button className="p-3 bg-black text-white cursor-pointer">Buy Now</button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="p-3 ml-4 bg-red-600 text-white cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-[#f5f4f4] p-5 w-full md:w-1/2">
            <h1 className="text-2xl text-[#0C6967] font-extrabold">Product Description</h1>
            <p className="font-medium">Meal-Type: {product.mealType[0]}</p>
            <p className="font-medium">Cook Time: {product.cookTimeMinutes} Minutes</p>
            <p className="font-medium">Cuisine: {product.cuisine}</p>
            <p className="font-medium">Difficulty: {product.difficulty}</p>

            <h1 className="text-2xl mt-4 text-[#0C6967] font-extrabold">Ingredients:</h1>
            <ul className="list-disc ml-5">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="font-medium">{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center font-medium text-lg">Loading...</div>
      )}
    </div>
  );
}

export default ProductDescription;
