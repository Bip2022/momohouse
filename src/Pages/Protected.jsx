import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Protected({ Comp }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Redirect to login if user is not authenticated
      navigate("/login");
    }
  }, [navigate, isAuthenticated,isLoading ]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="animate-spin w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mb-4"></div>
        <span className="text-xl font-medium text-gray-600">Loading...</span>
      </div>
    );
  }

  return <Comp /> ;
}

export default Protected;
