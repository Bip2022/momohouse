import { useEffect, useState } from "react";
import Slider from "react-slick"; // Importing Slider component
import "slick-carousel/slick/slick.css"; // Import Slider CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slider Theme
import Button from "../../Components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white border-[1px] border-[#DFE2E6] rounded-full p-3 hover:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] w-10 h-10 flex items-center justify-center"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowRight} className="text-[14px] text-[#a6a7a8]" />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white border-[1px] border-[#DFE2E6] rounded-full p-3 hover:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] w-10 h-10 flex items-center justify-center"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-[14px] text-[#a6a7a8]" />
    </div>
  );
};

// In the slider container div, add these classes:
<div className=" w-[80%] max-w-[1200px] mt-16 relative mx-10 overflow-visible">
  {/* Slider component */}
</div>

function Third() {
  const [products, setProducts] = useState([]);
  const [filterproducts, setFilterproducts] = useState([]);

  // Fetch the recipe data
  const getData = async () => {
    const response = await fetch("https://dummyjson.com/recipes?limit=7");
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
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1, // Default to 1 slide
    slidesToScroll: 1,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 640, // For 320px and 640px screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // For 768px and above
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="pt-10 flex flex-col items-center w-full">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">
          Our <span className="text-orange-500">Most Popular</span> Recipes
        </h1>
        <p className="text-gray-600 text-[14px]  md:text-[16px] lg:text-[16px] 2xl:text-[18px]">
          Browse through a variety of recipes with fresh ingredients selected only from the best places.
        </p>
      </div>

      {/* Cuisine Filter Buttons */}
      <div className="  flex gap-x-5 mt-6">
        <button onClick={() => getFilterProducts("Mexican")} className="rounded-full py-1 px-4 bg-slate-100 hover:text-red-500">
          Mexican
        </button>
        <button onClick={() => getFilterProducts("Indian")} className="rounded-full py-1 px-4 bg-slate-100 hover:text-red-500">
          Indian
        </button>
        <button onClick={() => getFilterProducts("American")} className="rounded-full py-1 px-4 bg-slate-100 hover:text-red-500">
          American
        </button>
      </div>

      {/* Recipe Slider Section */}
      <div className="  w-[80%] max-w-[1200px] mt-16 relative border-t-0"> {/* Increased top margin for spacing */}
        {filterproducts.length > 0 ? (
          <Slider {...sliderSettings}>
            {filterproducts.map((item, index) => (
              <div key={index} className="  flex flex-col items-center justify-center bg-white text-center rounded-lg p-6 gap-y-12"> {/* Increased gap-y for spacing */}
                <div className="flex items-center justify-center h-44 w-full">
                  <img src={item.image} className="h-40 w-40 object-cover rounded-full" alt={item.name} />
                </div>
                <p className="text-lg font-medium">{item.name}</p>
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
