import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import head from '../../assets/About/head.png';
import assist from '../../assets/About/assist.png';
import ass from '../../assets/About/ass.png';
import img1 from "../../assets/1pic.png";
import img2 from "../../assets/2pic.png";
import img3 from "../../assets/3pic.png";

const teamMembers = [
  { src: head, title: 'Head Chef' },
  { src: assist, title: 'Assistant Chef' },
  { src: ass, title: 'Assistant Chef' },
  { src: img1, title: 'Assistant Chef' },
  { src: img2, title: 'Assistant Chef' },
  { src: img3, title: 'Head Chef' }
];

function Fifth() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3; // एक पटकमा देखाउने स्लाइडहरूको संख्या
  const slidesToMove = 2; // स्क्रोल गर्दा कति स्लाइड सर्ने?
  const totalItems = teamMembers.length;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + slidesToMove) % totalItems);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - slidesToMove + totalItems) % totalItems);
  };

  // Circular effect मिलाउन Array दोहोर्याउनु
  const extendedTeam = [...teamMembers, ...teamMembers];
  const visibleItems = extendedTeam.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='mt-10 px-8 ml-2 mr-2 py-8 text-gray-700 bg-white drop-shadow-md md:px-32'>
      <h2 className='font-sans font-bold tracking-wider text-[51px] text-center'>
        Meet The <span className='text-[#D95103]'>Team</span>
      </h2>
      <p className='font-sans font-semibold text-[25px] text-[#0C6967] tracking-wide text-center'>
        Our talented team members who deliver only the best results
      </p>

      <div className='flex justify-between mt-10 mb-10 gap-6'>
        {visibleItems.map((member, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${member.src})` }}
            className='relative h-[512px] w-[30%] bg-cover bg-no-repeat bg-center rounded-[8px]'
          >
            <div className='absolute inset-0 bg-black opacity-5'></div>
            <div className='absolute bottom-7 left-10 font-sans font-bold text-white text-[41px] tracking-wide drop-shadow-md'>
              {member.title}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons & Indicator */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-lg font-semibold text-gray-700">
          {Math.min(startIndex + itemsPerPage, totalItems)}/{totalItems}
        </p>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-white text-slate-500 border-2 rounded-full p-3 shadow-lg hover:bg-slate-700 transition-colors"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-slate-500 border-2 rounded-full p-3 shadow-lg hover:bg-slate-700 transition-colors"
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fifth;
