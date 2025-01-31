import img1 from "../../assets/1pic.png";
import img11 from "../../assets/11pic.png";
import img2 from "../../assets/2pic.png";
import img22 from "../../assets/22pic.png";
import img3 from "../../assets/3pic.png";
import img33 from "../../assets/33pic.png";

function Third() {
  return (
    <>
      <div
        className="flex items-top justify-between px-6 md:px-24 py-14 mx-auto max-w-[1440px]"
      >
        {/* Left Side - Text Content */}
        <div className="w-1/2  ">
          <h1 className=" text-4xl font-bold pr-64">
            Our momos are <span className="text-orange-500">made with love</span>
          </h1>
          <p className=" mt-4 text-gray-600 leading-relaxed pr-24">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing.
            Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus.
            Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
          </p>
        </div>

        {/* Right Side - Images */}
        <div className=" relative w-2/3 flex justify-end pr-10">
          {/* Main Image */}
          <img
            src={img1}
            alt="cookman"
            className="w-full rounded-lg shadow-md"
            style={{ width: '500px', height: '448px', borderRadius: '4px' }}
          />
          {/* Overlay Image */}
          <img
            src={img11}
            alt="Momo plate"
            className="absolute top-[300px] left-40 w-1/3 rounded-lg shadow-lg"
            style={{ width: '264px', height: '191px' }}
          />
        </div>
      </div>








      <div
        className="flex items-top justify-between px-6 md:px-24 py-14 gap-1.25 mx-auto max-w-[1440px]"
      >
        {/* Right Side - Images (Now on the Left) */}
        <div className="relative w-2/3 flex justify-end pr-10">
          <img
            src={img2}
            className="w-full rounded-lg shadow-md"
            style={{ width: '500px', height: '448px', borderRadius: '4px' }}
          />
          <img
            src={img22}
            className="absolute top-[300px] right-2 w-1/3 rounded-lg shadow-lg"
            style={{ width: '264px', height: '191px' }}
          />
        </div>

        {/* Left Side - Text Content (Now on the Right) */}
        <div className="w-3/4 pl-40 ">
          <h1 className=" text-4xl font-bold">
            Taste the difference with
          </h1>
          <h1 className="text-4xl font-bold">
            <span className=" text-orange-500 pr-30">our handcrafted momos</span>
          </h1>
          <p className=" text-gray-600 leading-relaxed pr-24">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
          </p>
        </div>
      </div>
      <div
        className="flex items-top justify-between px-6 md:px-24 py-14 mx-auto max-w-[1440px]"
      >
        {/* Left Side - Text Content */}
        <div className="w-1/2 ">
          <h1 className=" text-4xl font-bold">
            Our momos are
          </h1>
          <h1 className=" text-4xl font-bold pr-32">
            the perfect <span className="text-orange-500">blend of tradition </span>
            and <span className="text-orange-500">innovation</span>
          </h1>
          <p className=" mt-4 text-gray-600 leading-relaxed pr-24">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.
          </p>
        </div>

        {/* Right Side - Images */}
        <div className=" relative w-2/3 flex justify-end pr-10">
          {/* Main Image */}
          <img
            src={img3}
            alt="Chef cooking"
            className="w-full rounded-lg shadow-md"
            style={{ width: '500px', height: '448px', borderRadius: '4px' }}
          />
          {/* Overlay Image */}
          <img
            src={img33}
            alt="Momo plate"
            className="absolute top-[300px] left-40 w-1/3 rounded-lg shadow-lg"
            style={{ width: '264px', height: '191px' }}
          />
        </div>
      </div>


    </>
  );
}

export default Third;