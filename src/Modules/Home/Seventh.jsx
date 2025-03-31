import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Seventh() {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [serviceType, setServiceType] = useState("");

  const formHandle = (e) => {
    e.preventDefault();
    console.log({ name, last, email, phone, serviceType, message });
  };

  return (
    <div className="mt-10"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            fontFamily: "Proxima Nova, sans-serif",
            fontWeight: 700,
            fontSize: "39px",
            color: "#000",
          }}
        >
          Get <span style={{ color: "#ff6600" }}>In Touch</span>
        </h3>
        <p
          style={{
            fontFamily: "Proxima Nova",
            fontWeight: 700,
            fontSize: "25px",
            color: "#0C6967",
            marginTop: "10px",
          }}
        >
          Our friendly team would love to hear from you
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px",
          flexWrap: "wrap", // Allow wrapping for smaller screens
        }}
      >
        {/* Left Side */}
        <div
          style={{
            width: "461px",
            height: "700px",
            borderRadius: "16px",
            padding: "32px",
            backgroundColor: "#004d4d",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            flex: "1 1 300px", // Allow this column to shrink and grow based on screen size
          }}
        >
          {/* Address Section */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <CiLocationOn style={{ marginRight: "5px" }} />
              <h2 style={{ marginBottom: 0 }}>Our Address</h2>
            </div>
            <p style={{ marginLeft: "25px" }}>
              New Baneshwor, Kathmandu, Bagmati, Nepal
            </p>
          </div>

          {/* Contacts Section */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <IoCallOutline style={{ marginRight: "5px" }} />
              <h2 style={{ marginBottom: 0 }}>Our Contacts</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
              <div>
                <p style={{ marginLeft: "25px", marginBottom: "2px" }}>
                  <strong>Mobile:</strong>
                </p>
                <p style={{ marginLeft: "25px" }}>9805689789</p>
                <p style={{ marginLeft: "25px" }}>9841275897</p>
              </div>
              <div>
                <p style={{ marginLeft: "25px", marginBottom: "2px" }}>
                  <strong>Landline</strong>
                </p>
                <p style={{ marginLeft: "25px" }}>01-4783972</p>
              </div>
            </div>
          </div>

          {/* Service Time Section */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <IoMdTime style={{ marginRight: "5px" }} />
              <h2 style={{ marginBottom: 0 }}>Our Service Time</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
              <div>
                <p style={{ marginLeft: "25px", marginBottom: "2px" }}>
                  <strong>MON - FRI:</strong>
                </p>
                <p style={{ marginLeft: "25px" }}>10 am - 8 pm</p>
              </div>
              <div>
                <p style={{ marginBottom: "2px" }}>
                  <strong>SAT - SUN:</strong>
                </p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Social Networks Section */}
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ marginBottom: "20px" }}>
              Get in touch on social networks
            </h2>
            <div style={{ display: "flex", gap: "10px" }}>
              <NavLink to="https://www.facebook.com/" target="_">
                <FaFacebookF style={{ fontSize: "24px", cursor: "pointer" }} />
              </NavLink>
              <NavLink to="https://www.instagram.com/" target="_">
                <FaInstagram style={{ fontSize: "24px", cursor: "pointer" }} />
              </NavLink>
              <NavLink to="https://www.tiktok.com/" target="_">
                <FaTiktok style={{ fontSize: "24px", cursor: "pointer" }} />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          style={{
            height: "700px",
            width: "50%",
            marginLeft: "20px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            flex: "1 1 300px", // Allow this column to shrink and grow based on screen size
          }}
        >
          <form onSubmit={formHandle}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <div style={{ display: "flex ", gap: "10px" }}>
              <div>
                <p>First Name</p>
                <input value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="First Name"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "230px",
                  }}
                />
              </div>
              <div>
                <p>Last Name</p>
                <input value={last}
                  onChange={(e) => setLast(e.target.value)}
                  type="text"
                  placeholder="Last Name"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "230px",
                  }}
                />
              </div>
            </div>

            <div>
              <p>Email</p>
              <input value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
              disabled={!name || !last || !email || !phone || !serviceType || !message}
              type="submit"
              style={{
                backgroundColor: !name || !last || !email || !phone || !serviceType || !message ? "#ff6600" : "#ccc",
                cursor: !name || !last || !email || !phone || !serviceType || !message ? "not-allowed" : "pointer",
                width: "256px",
                height: "59px",
                borderRadius: "100px",
                padding: "20px 40px",
                color: "white",
                border: "none",
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
    </div>
  );
}

export default Seventh;
