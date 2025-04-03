import { useSearchParams } from "react-router-dom";
import success from "../assets/success.png";

function Success() {
  const [SearchParams] = useSearchParams();
  const res = SearchParams.get("data");

  console.log(res);

  let decoded = "";
  let x = {};

  try {
    decoded = atob(res);
    x = JSON.parse(decoded);
    console.log(x.total_amount);
  } catch (error) {
    console.error("Error decoding data:", error);
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-14 py-12 text-center font-primary-head">
      <img
        className="w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4 m-auto"
        src={success}
        alt="Success"
      />
      <h2 className="font-bold text-[#2caa27] my-3 text-lg sm:text-xl md:text-2xl">
        Payment Successful
      </h2>
      <p className="font-normal text-sm sm:text-base mb-1.5">
        <strong>Total Amount:</strong> Rs. {x.total_amount || "N/A"}
      </p>
      <p className="font-normal text-sm sm:text-base mb-1.5">
        <strong>Status:</strong> <span>{x.status || "N/A"}</span>
      </p>
      <p className="font-normal text-sm sm:text-base mb-1.5">
        <strong>Transaction Code:</strong> {x.transaction_code || "N/A"}
      </p>
    </div>
  );
}

export default Success;
