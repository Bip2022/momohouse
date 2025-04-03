import Touch from '../../Components/Touch';

function Fourth() {
  return (
    <div className="mt-10 flex justify-center items-center px-4 sm:px-8 py-8">
      <div className="w-full max-w-[1234px] bg-[#F5F6F7] rounded-[15px] p-6 sm:p-8 md:p-12">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-[37px] tracking-wide text-center">
          Got any Queries ?
        </h2>
        <p className="font-sans font-normal text-base sm:text-lg md:text-[20px] text-[#707070] text-center my-6">
          If you have any queries, send us a message. Our Friendly team would love to hear from you.
        </p>
        <div className=" flex justify-center">
          <Touch title="Get In Touch" />
        </div>
      </div>
    </div>
  );
}

export default Fourth;
