import { useState, useEffect } from 'react';
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
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 for larger screens

  const totalItems = teamMembers.length;
  const slidesToMove = 1; // Move 1 item per click

  // Handle screen resizing
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width <= 320) {
        setItemsPerPage(1);
      } else if (width <= 640) {
        setItemsPerPage(2);
      } else if (width <= 768) {
        setItemsPerPage(3);
      } else if (width <= 1024) {
        setItemsPerPage(3);
      } else if (width <= 1280) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(3); // Default for larger screens
      }
    };

    // Set items per page initially
    updateItemsPerPage();

    // Add event listener for window resize
    window.addEventListener('resize', updateItemsPerPage);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + slidesToMove) % totalItems);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - slidesToMove + totalItems) % totalItems);
  };

  // Ensure circular behavior when slicing array
  const visibleItems = Array.from({ length: itemsPerPage }).map((_, i) =>
    teamMembers[(startIndex + i) % totalItems]
  );

  return (
    <div className='mt-10 px-4 md:px-16 py-8 text-gray-700 bg-white drop-shadow-md'>
      <h2 className='font-sans font-bold tracking-wider text-3xl md:text-5xl text-center'>
        Meet The <span className='text-[#D95103]'>Team</span>
      </h2>
      <p className='font-sans font-semibold text-lg md:text-2xl text-[#0C6967] tracking-wide text-center'>
        Our talented team members who deliver only the best results
      </p>

      <div className='flex justify-center gap-4 mt-10 mb-10'>
        {visibleItems.map((member, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${member.src})` }}
            className='relative h-64 sm:h-96 w-32 sm:w-60 md:w-72 bg-cover bg-no-repeat bg-center rounded-lg'
          >
            <div className='absolute inset-0 bg-black opacity-10'></div>
            <div className='absolute bottom-4 left-4 font-sans font-bold text-white text-lg md:text-2xl tracking-wide drop-shadow-md'>
              {member.title}
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-between items-center mt-6 px-4 md:px-16'>
        <p className='text-lg font-semibold text-gray-700'>
          {startIndex + 1}/{totalItems}
        </p>
        <div className='flex gap-4'>
          <button
            onClick={prevSlide}
            className='bg-white text-slate-500 border-2 rounded-full p-3 shadow-lg hover:bg-slate-700 hover:text-white transition-colors'
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className='bg-white text-slate-500 border-2 rounded-full p-3 shadow-lg hover:bg-slate-700 hover:text-white transition-colors'
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fifth;
