import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import LoadingPage from "./components/LoadingPage";
import ContactUs from "./pages/contact";
import Courses from "./pages/courses";
import Fee from "./pages/fee";



function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <LoadingPage onFinish={() => setLoading(false)} />;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/fee" element={<Fee/>}/>
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
import HeroSlider from "./components/HeroSlider";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] text-center text-white">
      <HeroSlider />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold">Welcome to Vikas Gurukulam</h1>
        <p className="text-lg mt-4 max-w-3xl">
          Your gateway to quality education and learning.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-accent text-white px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-blue-700">
            Get Started
          </button>
          <button className="bg-white text-primary px-6 py-3 rounded-lg text-lg font-semibold transition hover:bg-gray-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

//export default HeroSection;

