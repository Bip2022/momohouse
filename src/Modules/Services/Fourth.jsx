import Touch from '../../Components/Touch';

function Fourth() {
  return (
    <>
      <div className="mt-10  flex justify-center items-center max-h-screen">
        <div className="  ml-6  w-[1234px] px-8 py-8 bg-[#F5F6F7] rounded-[15px] my-10 ">

          <h2 className="font-sans font-bold text-[37px] tracking-wide text-center">Got any Queries ?</h2>
          <p className="font-sans font-normal text-[20px] text-[#707070] text-center my-6">
            If you have any queries, send us a message. Our Friendly team would love to hear from you
          </p>
          <Touch title="Get In Touch" />
        </div>
      </div>
    </>
  );
}

export default Fourth;
