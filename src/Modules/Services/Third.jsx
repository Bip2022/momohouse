import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import privat from "../../assets/privacylogo.png";
import party from "../../assets/service/party.png";
import qr from "../../assets/QR.png";
import categring from "../../assets/categring.png";
import ls1 from "../../assets/service1.jpg";
import ls2 from "../../assets/service2.jpg";
import ls3 from "../../assets/service3.jpg";
import ls4 from "../../assets/service4.jpg";
import ls5 from "../../assets/service5.jpg";
import rs1 from "../../assets/bservice1.jpg";
import rs2 from "../../assets/bservice2.jpg";
import rs3 from "../../assets/bservice3.jpg";
import rs4 from "../../assets/bservice4.jpg";
import rs5 from "../../assets/bservice5.jpg";

function Third() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-32 py-10 text-gray-700">
      {/* First Section: Private Party */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <img src={privat} alt="Privacy Logo" className="w-16 sm:w-20" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-6">Private Party</h1>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
          <div className="shadow-lg rounded-lg p-4 mt-6 flex items-center">
            <div>
              <h2 className="text-xl font-bold text-teal-700">Scan the QR code</h2>
              <p className="text-gray-600 text-sm mt-2">Check the service details</p>
            </div>
            <img src={qr} alt="QR Code" className="w-24 h-24 ml-4" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            <img src={party} alt="Party 0" className="rounded-xl" />
            <img src={ls1} alt="Party 1" className="rounded-xl" />
            <img src={ls2} alt="Party 2" className="rounded-xl" />
            <img src={ls3} alt="Party 3" className="rounded-xl" />
            <img src={ls4} alt="Party 4" className="rounded-xl" />
            <img src={ls5} alt="Party 5" className="rounded-xl" />
          </Slider>
        </div>
      </div>

      {/* Second Section: Catering */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mt-16">
        <div className="w-full md:w-1/2">
          <img src={categring} alt="Catering Logo" className="w-16 sm:w-20" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-6">Catering</h1>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
          <div className="shadow-lg rounded-lg p-4 mt-6 flex items-center">
            <div>
              <h2 className="text-xl font-bold text-teal-700">Scan the QR code</h2>
              <p className="text-gray-600 text-sm mt-2">Check the service details</p>
            </div>
            <img src={qr} alt="QR Code" className="w-24 h-24 ml-4" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            <img src={party} alt="Party 0" className="rounded-xl" />
            <img src={rs1} alt="Catering 1" className="rounded-xl" />
            <img src={rs2} alt="Catering 2" className="rounded-xl" />
            <img src={rs3} alt="Catering 3" className="rounded-xl" />
            <img src={rs4} alt="Catering 4" className="rounded-xl" />
            <img src={rs5} alt="Catering 5" className="rounded-xl" />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Third;