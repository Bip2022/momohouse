
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";

function ProductDescription() {
  const { dispatch } = useContext(cartContext);
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [isAdding, setIsAdding] = useState(false); // To prevent double-click

  const getSingleProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!response.ok) throw new Error("Product not found");
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.error("Error fetching product:", e);
      setProducts(null);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!isAdding && products) {
      setIsAdding(true);
      dispatch({ type: "AddToCart", payload: products });
      // Re-enable after a short delay
      setTimeout(() => setIsAdding(false), 500);
    }
  };

  return (
    <div className="w-[100%] m-auto px-4 lg:px-14 py-7 lg:py-14">
      {products ? (
        <div className="flex flex-col md:flex-row justify-around shadow-[0px_6px_21px_0px_rgba(0,_0,_0,_0.1)]">
          {/* Product Image and Details */}
          <div className="w-full md:w-[50%] bg-[#fcfbfb] p-5 mb-10 md:mb-0">
            <img 
              src={products.image} 
              className="w-32 h-32 m-auto md:ml-10 rounded-[50%] shadow-[0px_4px_21px_0px_rgba(0,_0,_0,_0.1)]" 
              alt={products.name} 
            />
            <div className="md:ml-10 mt-7">
              <p className="font-primary-head font-medium text-[16px]">{products.name}</p>
              <p className="font-bold text-[21px] text-[#D95103]">Rs. {products.caloriesPerServing}</p>
              <p className="font-medium text-[16px] mb-5">Rating: {products.rating}</p>
              <div>
                <button className="p-3 bg-black text-white">
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="ml-4 p-3 bg-red-600 text-white disabled:opacity-50"
                >
                  {isAdding ? "Adding..." : "Add To Cart"}
                </button>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-[#f5f4f4] p-5 w-full md:w-[50%]">
            <h1 className="text-[23px] text-[#0C6967] font-extrabold">Product Description</h1>
            <p className="mb-1 font-medium">Meal-Type: {products.mealType?.[0]}</p>
            <p className="mb-1 font-medium">Cook Time: {products.cookTimeMinutes} Minutes</p>
            <p className="mb-1 font-medium">Cuisine: {products.cuisine}</p>
            <p className="mb-1 font-medium">Difficulty: {products.difficulty}</p>

            <h1 className="text-[23px] mt-4 text-[#0C6967] font-extrabold">
              Ingredients:
            </h1>
            <ul className="mt-2 p-1">
              {products.ingredients?.map((ingredient, index) => (
                <li key={`${ingredient}-${index}`}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading or product not found...</div>
      )}
    </div>
  );
}

export default ProductDescription;