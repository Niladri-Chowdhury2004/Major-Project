import React from "react";
import { useNavigate } from "react-router-dom";

const DelhiMap = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Vacancy is available in this location</h2>

      <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224223.1614640695!2d77.07892568405917!3d28.585166616938647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcbd452a457d%3A0x527a8d58c02514e3!2sISKCON%20EAST%20DELHI!5e0!3m2!1sen!2sin!4v1746720427701!5m2!1sen!2sin" 
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Delhi India Gate Location Map"
        ></iframe>
      </div>

      <button onClick={handleBackToHome} style={{ marginTop: "20px", padding: "10px 20px" }}>
        Back to Home
      </button>
    </div>
  );
};

export default DelhiMap;
