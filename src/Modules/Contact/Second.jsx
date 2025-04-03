import { useState } from "react";

function Second() {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    console.log({ name, last, email, phone });
  };

  return (
    <div className="w-full mt-10 flex flex-col lg:flex-row gap-8 px-4 sm:px-6 md:px-10 lg:px-24">
      {/* Left Side (Map) */}
      <div className="relative w-full lg:w-1/2 h-64 sm:h-[450px] md:h-[600px] lg:h-[770px] border-t-4 border-b-4 border-gray-300">
        <iframe
          className="w-full h-full border-none rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16007.690329410278!2d85.3295186129335!3d27.694684219034322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e1!3m2!1sen!2snp!4v1737581810137!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-black w-56 sm:w-64 h-32 sm:h-40 p-4 shadow-md text-center font-bold text-lg flex items-center justify-center rounded-lg">
          New Baneshwor, Kathmandu, Bagmati, Nepal
        </div>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Contact <span className="text-[#ff6600]">Us</span>
        </h1>

        <p className="text-sm sm:text-base text-gray-600 mt-4">
          If you have any queries, send us a message. Our friendly team would love to hear from you.
        </p>

        <form onSubmit={formHandle} className="flex flex-col gap-4 mt-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="w-full">
              <label htmlFor='name' className="font-medium text-[16px] text-[#5c5c5c]">First Name <br/>
                <input 
                  onChange={(e) => setName(e.target.value)}
                  type='text' id="name" placeholder='Enter Your First Name' 
                  className="border border-gray-300 focus:outline-0 p-3 w-full rounded mt-2 placeholder:text-[15px]"/>
              </label>
            </div>
            <div className="w-full">
              <label htmlFor='last' className="font-medium text-[16px] text-[#5c5c5c]">Last Name <br/>
                <input 
                  onChange={(e) => setLast(e.target.value)}
                  type='text' id="last" placeholder='Enter Your Last Name'
                  className="border border-gray-300 focus:outline-0 p-3 w-full rounded mt-2 placeholder:text-[15px]"/>
              </label>
            </div>
          </div>

          <div>
            <p className="text-sm sm:text-base">Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              value={email}
              className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"
            />
          </div>

          <div>
            <p className="text-sm sm:text-base">What can we do for you?</p>
            <select className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base">
              <option value="">Choose</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div>
            <p className="text-sm sm:text-base">Phone Number</p>
            <div className="flex items-center">
              <span className="p-2 border-l border-t border-b bg-gray-100 text-gray-600 rounded-l text-sm sm:text-base">
                🇳🇵 +977
              </span>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone Number"
                value={phone}
                className="flex-1 p-2 border border-gray-300 rounded-r text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <p className="text-sm sm:text-base">Message</p>
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded text-sm sm:text-base"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full sm:w-[256px] h-[50px] sm:h-[59px] bg-[#ff6600] text-white font-bold rounded-full mt-4 flex justify-center items-center gap-2 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Second;