import React from "react";
import { useNavigate } from "react-router-dom";

const KolkataMap = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Vacancy is available in this location</h2>

      <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.7494701532532!2d88.42722777385298!3d22.66312762964902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f6ff1721a2d%3A0x399cbc0828e4ffed!2sBirati%20Banik%20More!5e0!3m2!1sen!2sin!4v1746713952126!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Birati Banik More Location Map"
        ></iframe>
      </div>

      <button onClick={handleBackToHome} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Back to Home
      </button>
    </div>
  );
};

export default KolkataMap;
