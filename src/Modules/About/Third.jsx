import img1 from "../../assets/1pic.png";
import img11 from "../../assets/11pic.png";
import img2 from "../../assets/2pic.png";
import img22 from "../../assets/22pic.png";
import img3 from "../../assets/3pic.png";
import img33 from "../../assets/33pic.png";

function Third() {
  return (
    <>
      {/* Section 1 - Original layout (text left, images right) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 md:px-10 xl:px-20 2xl:px-[24px] py-14 mx-auto max-w-[100%]">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 text-left lg:text-left">
          <h1 className="text-2xl sm:text-4xl xl:text-4xl font-bold">
            Our momos are <span className="text-orange-500">made with love</span>
          </h1>
          <p className="mt-2 md:text-[20px] xl:text-[24px] text-gray-600 leading-relaxed mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus.
          </p>
        </div>
        {/* Right Side - Images */}
        <div className="relative w-full lg:w-2/3 flex justify-center lg:justify-end mt-2 lg:mt-0">
          <img src={img1} alt="cookman" className="w-full max-w-xs sm:max-w-md rounded-lg shadow-md" />
          <img src={img11} alt="Momo plate" className="absolute lg:top-2/3 top-3/4 -left-[9px] lg:left-1/3 w-1/3 rounded-lg shadow-lg" />
        </div>
      </div>

 {/* Section 2 - Modified for mobile (text first, images second) */}
<div className="flex flex-col lg:flex-row-reverse items-center justify-between px-6 md:px-10 xl:px-20 2xl:px-[24px] py-14 mx-auto max-w-[100%]">
  {/* Text Content - Always comes first on mobile */}
  <div className="w-full lg:w-1/2 text-left lg:text-left lg:pl-10">
    <h1 className="text-2xl sm:text-4xl xl:text-4xl font-bold">
      Taste the difference with <span className="text-orange-500">our handcrafted momos</span>
    </h1>
    <p className="mt-2 xl:text-[24px] md:text-[20px] text-gray-600 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
    </p>
  </div>
  {/* Images - Always comes second on mobile */}
  <div className="relative w-full lg:w-2/3 flex justify-center lg:justify-start mt-2 lg:mt-0">
    <img src={img2} alt="Momo ingredients" className="w-full max-w-xs sm:max-w-md rounded-lg shadow-md" />
    <img src={img22} alt="Momo close-up" className="absolute lg:top-2/3 top-3/4 -right-[9px] lg:right-1/3 w-1/3 rounded-lg shadow-lg" />
  </div>
</div>

  {/* Section 3 - Original layout (text left, images right) */}
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 md:px-10 xl:px-20 2xl:px-[24px] py-14 mx-auto max-w-[100%]">
  {/* Left Side - Text Content */}
  <div className="w-full lg:w-1/2 text-left lg:text-left">
    <h1 className="lg:text-3xl text-2xl sm:text-4xl xl:text-4xl font-bold">
      Our momos are the perfect{' '}
      <span className="text-orange-500">blend of tradition</span> and{' '}
      <span className="text-orange-500">innovation</span>
    </h1>
    <p className="mt-4 xl:text-[24px] md:text-[20px] text-gray-600 leading-relaxed mx-auto lg:mx-0">
      Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
    </p>
  </div>
  {/* Right Side - Images */}
  <div className="relative w-full lg:w-2/3 flex justify-center lg:justify-end mt-2 lg:mt-0">
    <img src={img3} alt="Chef cooking" className="w-full max-w-xs sm:max-w-md rounded-lg shadow-md" />
    <img src={img33} alt="Momo plate" className="absolute lg:top-2/3 top-3/4 lg:left-1/3 -left-[9px] w-1/3 rounded-lg shadow-lg" />
  </div>
</div>
    </>
  );
}

export default Third;