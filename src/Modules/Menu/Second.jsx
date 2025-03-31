

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Second() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      setProducts(data.recipes || []); // Handle cases where `recipes` might be undefined
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {isLoading ? (
        // Loading skeleton
        <div className="  marker: mt-24 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-500 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
               <div className="h-2 bg-slate-500 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-500 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-500 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : products.length > 0 ? (
        // Product listing
        <div className="border-2 border-e-white shadow-xl mt-10 flex flex-wrap justify-center">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl shadow-2xl p-4 flex flex-col items-center w-52 gap-4 m-5 shadow-slate-600"
            >
              <NavLink to={`/productdescription/${product.id}`}>
                <img
                  src={product.image || "https://via.placeholder.com/150"}
                  alt={product.name || "Product"}
                  className="h-28 w-28 rounded-xl"
                />
                <p className="text-center mt-2">{product.name || "Unnamed Product"}</p>
              </NavLink>
            </div>
          ))}
        </div>
      ) : (
        // No products available
        <div className="text-center mt-10 text-gray-500">
          No products found. Please try again later.
        </div>
      )}
    </div>
  );
}

export default Second;

