import { useSearchParams, useNavigate } from 'react-router-dom';
import success from "../assets/success.png";

function Success() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const dataParam = searchParams.get("data");

    // Initialize default values
    let paymentData = {
        total_amount: "N/A",
        status: "N/A",
        transaction_code: "N/A"
    };

    try {
        if (dataParam) {
            const decoded = atob(dataParam);
            paymentData = JSON.parse(decoded);
        }
    } catch (error) {
        console.error("Error parsing payment data:", error);
        // Consider setting error state here to show to the user
    }

    const handleRedirect = () => {
        // Navigate to your menu route
        navigate('/menu');
    };

    return (
        <div className="w-full flex flex-col items-center justify-center sm:px-8 lg:px-14 text-center font-primary-head py-8">
            <img
                className="mx-auto my-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
                src={success}
                alt="Payment Successful"
            />
            <h2 className="font-bold text-[#2caa27] mt-6 mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Payment Successful
            </h2>
            <div className="space-y-2 max-w-2xl w-full px-4">
                <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
                    <strong>Total Amount:</strong> Rs. {paymentData.total_amount}
                </p>
                <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
                    <strong>Status:</strong> {paymentData.status}
                </p>
                <p className="font-normal text-sm sm:text-base md:text-lg lg:text-xl">
                    <strong>Transaction Code:</strong> {paymentData.transaction_code}
                </p>
            </div>
            <button
                onClick={handleRedirect}
                className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base md:text-lg"
            >
                Redirect to Menu Section
            </button>
        </div>
    );
}

export default Success;
