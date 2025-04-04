import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../Context/CartProvider";

function ProductDescription() {
  const { dispatch } = useContext(cartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!response.ok) throw new Error('Product not found');
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (error) return <div className="text-center text-red-500 p-8">{error}</div>;
  if (!product) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg">
        {/* Product Image Section */}
        <div className="md:w-1/2 p-6 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 rounded-full object-cover shadow-xl"
          />
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-[#D95103] font-semibold mb-3">
              ₹{product.caloriesPerServing}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => dispatch({ type: "AddToCart", payload: product })}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
              >
                Add to Cart
              </button>
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="md:w-1/2 p-6 bg-gray-50">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0C6967]">Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Cuisine:</p>
                <p>{product.cuisine}</p>
              </div>
              <div>
                <p className="font-semibold">Cook Time:</p>
                <p>{product.cookTimeMinutes} mins</p>
              </div>
              <div>
                <p className="font-semibold">Difficulty:</p>
                <p>{product.difficulty}</p>
              </div>
              <div>
                <p className="font-semibold">Rating:</p>
                <p>{product.rating}/5</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#0C6967] mt-6">Ingredients</h3>
            <ul className="list-disc pl-6 columns-2">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;