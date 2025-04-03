import { useState } from "react";
import { ArrowLeft, ArrowRight, } from "lucide-react";
import bgbeside from "../../assets/aboutgirlbeside.png";
import image1 from "../../assets/aboutgirl.png";
import image2 from "../../assets/menu1.jpg";
import image3 from "../../assets/menu2.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    name: "Livia Dias",
    text: "Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences.",
    position: "CEO",
    image: image1,
  },
  {
    name: "Saron Doe",
    text: "Our goal is to make every meal a celebration. We believe great food should always be enjoyed with great people in a warm and friendly environment.",
    position: "Founder",
    image: image2,
  },
  {
    name: "Anjila Regmi",
    text: "Momos are a popular steamed or fried dumpling dish originating from Tibetan and Nepali cuisine, featuring a dough-wrapped pocket of spiced meat or vegetables, often served with various sauces and condiments. ",
    position: "Manager",
    image: image3,
  },

];


function Fourth() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgbeside})` }}
      className=" sm:mt-8 md:mt-14 lg:mt-10 xl:mt-20 2xl:mt-24 2xl:mx-[14px] relative h-[800px]  sm:h-[1034px] md:h-[590px] bg-cover bg-center bg-no-repeat flex items-center 2xl:justify-end overflow-hidden"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content Wrapper */}

      <div className="w-[100%] m-auto px-4 sm:px-4 md:px-14 py-8 sm:py-8 md:py-0 flex justify-between opacity-100">

        <div className="relative font-primary-head flex items-center  gap-x-6">

          <div className="flex flex-col 2xl:justify-end  sm:flex-col md:flex-row">
            <div className="  w-[100%] sm:w-[100%] md:w-[50%] text-left sm:text-left md:text-center lg:text-left xl:text-left 2xl:text-left mb-7 sm:mb-7 md:mb-0">
              <RiDoubleQuotesL size={55} color="#ffffff" />

              <p className="h-auto sm:h-auto md:min-h-[180px] text-[17px] sm:text-[17px] md:text-[24px] font-light text-[#ffffff] my-4 sm:my-4 md:my-7">{testimonials[currentIndex].text}</p>
              <h2 className="text-[25px] sm:text-[25px] md:text-[39px]  xl:text-left 2xl:text-left font-bold text-[#ffffff]">{testimonials[currentIndex].name}</h2>
              <h2 className="text-[19px] sm:text-[19px] md:text-[25px] xl:text-left 2xl:text-left font-normal text-[#ffffff]">{testimonials[currentIndex].position}</h2>

              <div className="flex float-end justify-center md:justify-start gap-4  mt-4">
                <button onClick={prevTestimonial} className="p-2 bg-transparent border-[1px] border-[#DFE2E6] hover:bg-black rounded-full cursor-pointer">
                  <ArrowLeft size={17} color="white" />
                </button>
                <button onClick={nextTestimonial} className="p-2 bg-transparent  border-[1px] border-[#DFE2E6] hover:bg-black rounded-full cursor-pointer">
                  <ArrowRight size={17} color="white" />
                </button>
              </div>
            </div>

            <div className="  2xl:ml-[64px]  w-[100%] sm:w-[100%] md:w-[50%]">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="  md:absolute right-[0] sm:right-[0] md:right-[-56px]  top-[0px]  sm:top-[0px] md:top-[-29px] lg:top-[-67px] xl:top-[-101px] max-w-full sm:max-w-full md:w-[350px] lg:w-[475px] xl:w-[612px]  h-auto sm:h-auto md:h-[640px] lg:h-[640px] xl:h-[640px] object-cover mx-auto align-middle"
              />
            </div>
          </div>


        </div>
      </div>


    </div>
  );
}
export default Fourth;

