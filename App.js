import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/navbar";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/footer";
import AboutUs from "./components/Aboutus";
import SecurityGuard1 from "./components/SecurityGuard1";
import Worker1 from "./components/Worker1";
import Worker2 from "./components/Worker2";
import SecurityGuard2 from "./components/SecurityGuard2";
import WorkerList from "./components/Workerlist";
import SecurityGuardList from "./components/Securityguardlist";
import SecurityGuard1Booking from "./components/SecurityGuard1Booking";
import Worker1Booking from "./components/Worker1Booking";
import Worker2Booking from "./components/Worker2Booking";
import SecurityGuard2Booking from "./components/SecurityGuard2Booking";
import Worker3Booking from "./components/Worker3Booking";
import Worker4Booking from "./components/Worker4Booking";
import Securityguard3Booking from "./components/Securityguard3Booking";
import Securityguard4Booking from "./components/Securityguard4Booking";
import KolkataMap from "./components/KolkataMap";
import DelhiMap from "./components/DelhiMap";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Login from "./components/Login";
import ProfileForm from "./components/profile";

// 🆕 Import the Admin Page
import AdminPage from "./components/Admin.js";
import PaymentPage from "./components/Payment.js";
function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        <main style={{ textAlign: "center" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <br />
                  <ImageSlider />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "20px",
                      marginTop: "40px",
                      flexWrap: "wrap",
                    }}
                  >
                    <SecurityGuard1 />
                    <Worker1 />
                    <Worker2 />
                    <SecurityGuard2 />
                  </div>
                </>
              }
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/worker" element={<WorkerList />} />
            <Route path="/securityguard" element={<SecurityGuardList />} />
            <Route path="/securityguard1-booking" element={<SecurityGuard1Booking />} />
            <Route path="/worker1-booking" element={<Worker1Booking />} />
            <Route path="/worker2-booking" element={<Worker2Booking />} />
            <Route path="/securityguard2-booking" element={<SecurityGuard2Booking />} />
            <Route path="/worker-booking/3" element={<Worker3Booking />} />
            <Route path="/worker-booking/4" element={<Worker4Booking />} />
            <Route path="/securityguard-booking/3" element={<Securityguard3Booking />} />
            <Route path="/securityguard-booking/4" element={<Securityguard4Booking />} />
            <Route path="/kolkata-map" element={<KolkataMap />} />
            <Route path="/delhi-map" element={<DelhiMap />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<ProfileForm />} />
            
            {/* 🆕 Admin Page Route */}
            <Route path="/admin" element={<AdminPage />} />
             <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
