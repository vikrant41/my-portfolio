import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const phoneNumber = "919913075152"; // Replace with your number
  const message = "Hi Vikrant! I visited your portfolio and want to connect.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
        textDecoration: "none",
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppFloat;
