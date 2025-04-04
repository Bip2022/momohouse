import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import success from "../assets/success.png";

function Success() {
  const [SearchParams] = useSearchParams();
  const navigate = useNavigate();
  const res = SearchParams.get("data");

  let decoded = "";
  let x = {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/menu");
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  try {
    decoded = atob(res);
    x = JSON.parse(decoded);
  } catch (error) {
    console.error("Error decoding data:", error);
  }

  return (
    <div className="w-full flex flex-col items-center justify-center sm:px-8 lg:px-14 text-center font-primary-head">
      <img
        className="mx-auto my-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
        src={success}
        alt="Payment Successful"
      />
      <h2 className="font-bold text-[#2caa27] mt-6 mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Payment Successful
      </h2>
      <div className="space-y-2 max-w-2xl">
        <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
          <strong>Total Amount:</strong> Rs. {x.total_amount || "N/A"}
        </p>
        <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
          <strong>Status:</strong> <span>{x.status || "N/A"}</span>
        </p>
        <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
          <strong>Transaction Code:</strong> {x.transaction_code || "N/A"}
        </p>
      </div>
      <p className="mt-4 text-gray-600 text-sm md:text-base">
        Redirecting to menu page in 5 seconds...
      </p>
    </div>
  );
}

export default Success;