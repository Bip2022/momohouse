import React, { useState } from "react";
import regi from "../assets/signup.webp";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setTermsAccepted(checked);
    } else {
      switch (name) {
        case "firstName":
          setFirstName(value);
          break;
        case "lastName":
          setLastName(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "password":
          setPassword(value);
          break;
        case "confirmPassword":
          setConfirmPassword(value);
          break;
        default:
          break;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }
    if (password.length < 8) {
      return alert("Password must be at least 8 characters long");
    }
    if (!termsAccepted) {
      return alert("You must accept the terms and conditions.");
    }
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTermsAccepted(false);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center  bg-blue-400 px-4 sm:px-6 lg:px-10 py-8">
      <div className="hidden lg:flex w-1/2 justify-center">
        <img src={regi} alt="Sign Up Illustration" className="max-w-full h-auto object-cover" />
      </div>
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <p className="text-gray-600 text-center mb-6">Please fill in this form to create an account!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-2">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input id="firstName" name="firstName" type="text" value={firstName} onChange={handleChange} required className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="flex-1 mt-2 sm:mt-0">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input id="lastName" name="lastName" type="text" value={lastName} onChange={handleChange} required className="mt-1 p-2 w-full border rounded-md" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" value={email} onChange={handleChange} required className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input id="password" name="password" type="password" value={password} onChange={handleChange} required className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" value={confirmPassword} onChange={handleChange} required className="mt-1 p-2 w-full border rounded-md" />
          </div>
          <div className="flex items-center space-x-2">
            <input id="termsAccepted" name="termsAccepted" type="checkbox" checked={termsAccepted} onChange={handleChange} className="h-4 w-4 text-blue-500" />
            <label htmlFor="termsAccepted" className="text-sm text-gray-600">
              I accept the <a href="#" className="text-blue-500">Terms of Use</a> & <a href="#" className="text-blue-500">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;