import { useEffect, useState } from "react";
import Slider from "react-slick"; // Importing Slider component
import "slick-carousel/slick/slick.css"; // Import Slider CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slider Theme
import Button from "../../Components/Button";

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -right-10 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-200 rounded-full p-3 hover:bg-gray-300 text-xl"
      onClick={onClick}
    >
      &gt;
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -left-10 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-200 rounded-full p-3 hover:bg-gray-300 text-xl"
      onClick={onClick}
    >
      &lt;
    </div>
  );
};

function Third() {
  const [products, setProducts] = useState([]);
  const [filterproducts, setFilterproducts] = useState([]);

  // Fetch the recipe data
  const getData = async () => {
    const response = await fetch("https://dummyjson.com/recipe");
    const data = await response.json();
    setProducts(data.recipes);
    setFilterproducts(data.recipes); // Show all recipes initially
  };

  useEffect(() => {
    getData();
  }, []);

  // Filter recipes based on selected cuisine
  const getFilterProducts = (cuisine) => {
    const filteredItems = products.filter((product) => product.cuisine === cuisine);
    setFilterproducts(filteredItems);
  };

  // Slider settings with custom arrows
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" pt-10 flex flex-col items-center w-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Our <span className="text-orange-500">Most Popular</span> Recipes
        </h1>
        <p className="text-gray-600">
          Browse through a variety of recipes with fresh ingredients selected
          only from the best places.
        </p>
      </div>

      {/* Cuisine Filter Buttons */}
      <div className="flex gap-x-5 mt-6">
        <button
          onClick={() => getFilterProducts("Mexican")}
          className="rounded-full py-1 px-4 bg-slate-100 hover:text-red-500"
        >
          Mexican
        </button>
        <button
          onClick={() => getFilterProducts("Indian")}
          className="rounded-full py-1 px-4 bg-slate-100 hover:text-red-500"
        >
          Indian
        </button>
        <button
          onClick={() => getFilterProducts("American")}
          className="rounded-full py-1 px-4 bg-slate-100 hover:text-red-500"
        >
          American
        </button>
      </div>

      {/* Recipe Slider Section */}
      <div className="w-[80%] max-w-[1200px] mt-8 relative border-t-0">
        {filterproducts.length > 0 ? (
          <Slider {...sliderSettings}>
            {filterproducts.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white text-center rounded-lg p-2"
              >
                <div className="flex items-center justify-center h-36 w-full">
                  <img
                    src={item.image}
                    className="h-32 w-32 object-cover rounded-full"
                    alt={item.name}
                  />
                </div>
                <p className="text-lg font-medium mt-2">{item.name}</p>
                <p className="text-red-400 text-x">Rs. {item.caloriesPerServing}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-gray-500">No recipes available.</div>
        )}
      </div>

      {/* Explore Menu Button */}
      <Button title="Explore Our Menu" className="mt-8" />
    </div>
  );
}

export default Third;
