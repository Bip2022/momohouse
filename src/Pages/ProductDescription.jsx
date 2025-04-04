// ProductDescription.jsx
import { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";

function ProductDescription() {
  const { dispatch } = useContext(cartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const lastClickTime = useRef(0); // Track last click timestamp

  // Fetch product data
  const getSingleProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!res.ok) throw new Error("Failed to fetch product");
      const data = await res.json();
      setProduct(data);
    } catch (e) {
      console.error("Error fetching product:", e);
      setError("Failed to load product details.");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  // Add to cart handler with click cooldown
  const handleAddToCart = (e) => {
    e.preventDefault();
    const now = Date.now();
    
    // Prevent multiple clicks within 1 second
    if (now - lastClickTime.current < 1000) return;
    
    lastClickTime.current = now;
    dispatch({ type: "AddToCart", payload: product });
  };

  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!product) return <div className="text-center">Loading...</div>;

  return (
    <div className="w-full px-4 lg:px-14 py-7 lg:py-14">
      <div className="flex flex-col md:flex-row justify-around shadow-md">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 bg-gray-100 flex flex-col p-5 mb-10 md:mb-0">
          <img
            src={product.image}
            className="w-32 h-32 mx-auto lg:ml-10 rounded-full shadow-md"
            alt={product.name || "Product Image"}
          />
          <div className="ml-0 md:ml-10 mt-7">
            <p className="font-medium text-lg">{product.name}</p>
            <p className="font-bold text-2xl text-red-600">Rs. {product.caloriesPerServing}</p>
            <p className="font-medium text-lg">Rating: {product.rating}</p>
            <div className="mt-5">
              <button className="p-3 bg-black text-white">Buy Now</button>
              <button
                onClick={handleAddToCart}
                className="p-3 ml-4 bg-red-600 text-white"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="bg-gray-200 p-5 w-full md:w-1/2">
          <h1 className="text-xl font-extrabold text-teal-700">Product Description</h1>
          <p className="font-medium">Meal-Type: {product.mealType?.[0]}</p>
          <p className="font-medium">Cook Time: {product.cookTimeMinutes} Minutes</p>
          <p className="font-medium">Cuisine: {product.cuisine}</p>
          <p className="font-medium">Difficulty: {product.difficulty}</p>

          <h1 className="text-xl font-extrabold text-teal-700 mt-4">Ingredients:</h1>
          <ul className="mt-2">
            {product.ingredients?.map((ingredient) => (
              <li key={ingredient} className="list-disc ml-4">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;