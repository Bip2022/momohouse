import line from "../../assets/allergy/line.png";
import "@fontsource/chela-one";
import Qr from "../../Components/Qr";
function Third() {
  return (
    <>
    <div className="  relative w-full min-h-screen flex flex-col items-center justify-center">
      {/* Section Title */}
      <h1 className="relative inline-flex items-center justify-center gap-4 mt-4 z-10 text-[40px] leading-[48px]">
        <img src={line} alt="decorative line" className="w-24 h-1" />
        <span className="text-orange-500 font-chela-one">Allergy</span>
        <span className="text-[#101828] font-chela-one">Advice</span>
        <img src={line} alt="decorative line" className="w-24 h-1" />
      </h1>

      <div className=" w-[1128px] h-[696px] mt-5">
        <p className="font-sans font-inter text-[16px] text-[#414040] tracking-wide leading-[32px] mb-4">Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est blandit in gravida. Nisl facilisis luctus sit porttitor placerat purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium nisl. In viverra diam dis montes orci congue vulputate magna ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis amet euismod malesuada. Amet sed neque vitae malesuada quis sed urna</p>
        <p className="font-sans font-inter text-[16px] text-[#414040] tracking-wide leading-[32px] mb-4">Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est ultricies risus et sed. Donec auctor tristique quam morbi pellentesque et. Scelerisque dui id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate quis ut mi placerat auctor. Ipsum massa suspendisse netus mollis interdum.</p>
        <p className="font-sans font-inter text-[16px] text-[#414040] tracking-wide leading-[32px] mb-4">Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique donec dignissim aenean congue justo et. Parturient elit adipiscing non vitae mattis. Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue sit etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae condimentum bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc morbi leo quisque viverra ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim. Urna turpis purus turpis elit risus.</p>
        <p className="font-sans font-inter text-[16px] text-[#414040] tracking-wide leading-[32px] mb-4">Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem. Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna enim tortor arcu sit lacinia. Dapibus praesent vitae dolor cursus fringilla hac facilisis pellentesque. Elementum lacus varius et neque amet aliquam donec sed. Ultrices euismod commodo id vehicula commodo. Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae volutpat est dui tortor. Viverra habitant et consequat vitae elit aliquet iaculis in tristique.</p>
        <p className="font-sans font-inter text-[16px] text-[#414040] tracking-wide leading-[32px] mb-4">Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie arcu nulla convallis interdum proin dui ut porta. Amet potenti praesent pulvinar scelerisque vitae habitant eget. Senectus hac id aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum ultrices elementum feugiat erat suspendisse mi fermentum magna suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At blandit vulputate morbi tortor amet. Hac nec gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus condimentum mattis massa integer.</p>
      </div>
     
    </div>
     <div className="mt-5"> {/* Negative margin applied here */}
     <Qr/>
    </div>
    </>

  )
}
export default Third;