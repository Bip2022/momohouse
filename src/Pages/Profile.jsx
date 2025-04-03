import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    // Show loading state if data is still being fetched
    if (isLoading) {
        return <div className="font-primary-head text-[17px] text-[#0C6967] text-center py-10">Loading...</div>;
    }

    return (
        <div className="profile-container w-full px-4 py-14 font-primary-head">
            <h2 className="text-2xl font-bold mb-4 text-center text-[#0C6967]">My Profile</h2>
            {isAuthenticated ? (
                <div className="profile-details flex flex-col lg:flex-row lg:justify-between items-center text-center">
                    <div className="profile-item mb-6 lg:mb-0 lg:w-1/3">
                        <h3 className="text-lg font-semibold text-[#0C6967]">Name:</h3>
                        <p>{user.name}</p>
                    </div>
                    <div className="profile-item mb-6 lg:mb-0 lg:w-1/3">
                        <h3 className="text-lg font-semibold text-[#0C6967]">Email:</h3>
                        <p>{user.email}</p>
                    </div>
                    <div className="profile-item lg:w-1/3">
                        <h3 className="text-lg font-semibold text-[#0C6967]">Profile Picture:</h3>
                        <img 
                            src={user.picture} 
                            alt="Profile"
                            className="h-32 w-32 rounded-full object-cover mx-auto" 
                        />
                    </div>
                </div>
            ) : (
                <p className="font-primary-head text-[17px] text-[#0C6967] text-center py-10">You are not logged in. Please log in to view your profile.</p>
            )}
        </div>
    );
}

export default Profile;
