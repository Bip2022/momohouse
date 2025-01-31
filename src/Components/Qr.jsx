import qr from "../assets/QR.png";
import { MdOutlinePhoneIphone } from "react-icons/md";

function Qr() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        fontFamily: "Arial, sans-serif",
        padding: "20px 0",
      }}
    >
      <h3
        style={{
          color: "#0C6967", // Darker green
          fontWeight: "700",
          fontSize: "1.5rem",
          margin: 0,
        }}
      >
        Scan the QR code
      </h3>
      <p
        style={{
          color: "#444",
          fontSize: "0.9rem",
          textAlign: "center",
          margin: 0,
          lineHeight: 1.4,
          maxWidth: "280px",
        }}
      >
        You can also check the allergy advices using your phone as well
      </p>
      <div
        style={{
          padding: "12px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "5px 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src={qr}
          alt="QR Code"
          style={{
            width: "160px",
            height: "160px",
            border: "5px solid #000",
            borderRadius: "8px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          // Updated orange color
          fontWeight: "700",
          fontSize: "1.4rem",
        }}
      >
        <span style={{ color: "#C45A29" }}>SCAN</span>
        ME!
        <MdOutlinePhoneIphone style={{ fontSize: "1.6rem" }} />
      </div>
    </div>
  );
}

export default Qr;