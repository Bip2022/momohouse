import { useState } from "react";
import regi from "../assets/signup.webp";

function SignUp() {
  // State to store form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "termsAccepted") {
        setTermsAccepted(checked);
      }
    } else {
      if (name === "firstName") setFirstName(value);
      if (name === "lastName") setLastName(value);
      if (name === "email") setEmail(value);
      if (name === "password") setPassword(value);
      if (name === "confirmPassword") setConfirmPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }

    if (password.length < 8) {
      return alert("Password must be at least 8 characters long");
    }

    // Check if terms are accepted
    if (!termsAccepted) {
      alert("You must accept the terms and conditions.");
      return;
    }

    // Handle signup logic here (e.g., send data to server)
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);

    // Reset the form after successful submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTermsAccepted(false);
  };

  return (
    <div className="flex justify-between items-center h-screen bg-blue-400 px-10">
      {/* Left section for the image */}
      <div className="w-1/2  flex justify-center hidden lg:block">
        <img src={regi} alt="Sign Up Illustration" className="max-w-full h-auto object-cover" />
      </div>

      {/* Right section for the form */}
      <div className="w-full max-w-md mr-24 p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <p className="text-gray-600 text-center mb-6">Please fill in this form to create an account!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div className="flex space-x-2">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={firstName}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Last Name */}
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={lastName}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <input
              id="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              checked={termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 text-blue-500"
            />
            <label htmlFor="termsAccepted" className="text-sm text-gray-600">
              I accept the <a href="#" className="text-blue-500">Terms of Use</a> & <a href="#" className="text-blue-500">Privacy Policy</a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
