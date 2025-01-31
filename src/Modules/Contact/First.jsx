function First() {
  return (
    <div
      className="mt-10"
      style={{
        display: "flex",
        justifyContent: "space-between", // Align the map and form side by side
        alignItems: "flex-start", // Align items at the top
        gap: "5px", // Reduced gap between the two sections
        padding: "20px 150px", // 20px padding on top and bottom, 150px on left and right (x and y axes)
      }}
    >
      {/* Left Side (Map) */}
      <div
        style={{
          width: "611px", // Width set to 611px
          height: "720px", // Height set to 720px
          position: "relative",
          borderTop: "4px solid #ccc", // Top border set to 4px
          borderBottom: "4px solid #ccc", // Bottom border set to 4px
        }}
      >
        <iframe
          className="w-full h-full border-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16007.690329410278!2d85.3295186129335!3d27.694684219034322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e1!3m2!1sen!2snp!4v1737581810137!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
          }}
        ></iframe>

        {/* Address in the middle of the map */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-black w-64 h-40 p-4 shadow-md text-center font-bold text-lg flex items-center justify-center rounded-lg"
        >
          New Baneshwor, Kathmandu, Bagmati, Nepal
        </div>
      </div>

      {/* Right Side (Form) */}
      <div
        style={{
          width: "608px", // Width set to 608px
          height: "720px", // Height set to 720px
          borderRadius: "16px", // Border radius set to 16px
          padding: "40px", // Padding set to 40px
          backgroundColor: "#f9f9f9",
          gap: "10px", // Gap set to 48px
        }}
      >
        {/* Heading Style Updated */}
        <h1
          style={{
            fontFamily: "Proxima Nova, sans-serif",
            fontWeight: 700,
            fontSize: "31px",
            lineHeight: "37.2px",
            color: "#333", // Dark gray color for better visibility
          }}
        >
          Contact <span style={{ color: "#ff6600" }}>Us</span>
        </h1>

        {/* Paragraph Style Updated */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "28.8px",
          }}
        >
          If you have any queries, send us a message. Our friendly team would love to hear from you.
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
            height: "100%", // Ensure form fills the space available
            overflowY: "auto", // Allow scrolling if content overflows
          }}
        >
          <div style={{ display: "flex", gap: "5px" }}>
            <div>
              <p>First Name</p>
              <input
                type="text"
                placeholder="First Name"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "260px",
                }}
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "260px",
                }}
              />
            </div>
          </div>

          <div>
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
          </div>

          <div>
            <p>What can we do for you?</p>
            <select
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            >
              <option value="">Choose</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div>
            <p>Phone Number</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "5px 0 0 5px",
                  border: "1px solid #ccc",
                  backgroundColor: "#f1f1f1",
                }}
              >
                🇳🇵 +977
              </span>
              <input
                type="tel"
                placeholder="Phone Number"
                style={{
                  flex: 1,
                  padding: "10px",
                  borderRadius: "0 5px 5px 0",
                  border: "1px solid #ccc",
                }}
              />
            </div>
          </div>

          <div>
            <p>Message</p>
            <textarea
              placeholder="Message"
              rows="4"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              width: "256px",
              height: "59px",
              borderRadius: "100px",
              padding: "20px 40px",
              backgroundColor: "#ff6600",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default First;
