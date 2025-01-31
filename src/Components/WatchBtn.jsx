import { FaRegCirclePlay } from "react-icons/fa6";

function WatchBtn({ title }) {
  return (
    <div>
      <button
        onClick={() => {
          // Open the YouTube video in a new tab
          window.open("https://www.youtube.com/watch?v=sv3TXMSv6Lw&ab_channel=Tasty", "_blank");
        }}
        className="bg-green-800 flex  
                  rounded-2xl justify-center items-center mt-5 h-10 px-5 text-white"
      >
        <FaRegCirclePlay className="mr-2" /> {/* Increased margin-right for more space */}
        {title}
      </button>
    </div>
  );
}

export default WatchBtn;
