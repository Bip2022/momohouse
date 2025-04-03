import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import girl from "../../assets/girl.png";
import man1 from "../../assets/man1.jpg";
import man2 from "../../assets/man2.jpg";

const testimonials = [
  {
    name: "Livia Dias",
    text: "Only the best momo you can find in the market. Different varieties of momo to choose from. Will be visiting again soon!",
    image: girl,
  },
  {
    name: "John Doe",
    text: "Amazing experience! The flavors were incredible, and the service was top-notch. Highly recommend!",
    image: man1,
  },
  {
    name: "Sophia Lee",
    text: "Absolutely loved the food! Fresh ingredients and great taste. Will definitely return!",
    image: man2,
  },
];

export default function Sixth() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" mt-12  py-14">
      <div className="2xl:mx-[14px]  m-auto px-4 sm:px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="w-[100%] sm:w-[100%] md:w-[50%] text-left sm:text-left md:text-center lg:text-left xl:text-left 2xl:text-left mb-7 sm:mb-7 md:mb-0">
          <div className="font-primary-head">
          <h2 className="font-bold text-[22px] text-center lg:text-left  md:mt-10 md:text-left sm:text-[29px] md:text-[39px]  text-[#101828]">
              200+ <span className="text-[#D95103]">Happy Customers</span>
            </h2>
            <h3 className="font-semibold mt-1 text-[14px] text-center sm:text-[20px] md:text-[25px] md:text-left text-[#0C6967]">
              What our customers say about us
            </h3>
            <p className="text-[14px] sm:text-[17px] mt-4 md:text-[20px]  md:text-left text-center font-light text-[#101828] italic mb-7">
              "{testimonials[currentIndex].text}"
            </p>
           
            <h2 className="text-[25px] sm:text-[25px] md:text-[24px] lg:text-[32px] md:text-left  font-bold text-center text-[#101828]">
              {testimonials[currentIndex].name}
            </h2>
            <div className="text-[19px] sm:text-[19px] md:text-[25px]  font-normal text-[#101828] mt-4">
              {/* Placeholder for any position if needed */}
            </div>

            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-transparent border-[1px] border-[#DFE2E6] hover:bg-gray-300 rounded-full"
              >
                <FiArrowLeft size={17} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-transparent border-[1px] border-[#DFE2E6] hover:bg-gray-300 rounded-full"
              >
                <FiArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="  sm:w-[100%] 2xl:ml-[210px]  md:w-[50%]">
          <div className="relative w-full h-auto">
            <img
              src={testimonials[currentIndex].image}
              alt={`${testimonials[currentIndex].name}'s testimonial`}
              className="max-w-full sm:max-w-full md:w-[350px] lg:w-[475px] xl:w-[612px] h-auto sm:h-auto rounded-xl md:h-[450px] lg:h-[450px] xl:h-[640px] object-cover mx-auto align-middle"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
