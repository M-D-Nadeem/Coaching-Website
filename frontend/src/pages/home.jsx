import React, { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import axiosInstance from "../helper/axiosInstance";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    mobile: "",
    email: "",
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loadingToast = toast.loading("Sending enquiry...");
        const response = await axiosInstance.post("/lms/sendEnquiryMail", formData);        
        if(response.data.success){
        toast.update(loadingToast, { 
          render: "Enquiry sent successfully!", 
          type: "success", 
          isLoading: false, 
          autoClose: 3000 
        });        
        setFormData({ name: "", course: "", mobile: "", email: "" });
      }else{
        toast.update(loadingToast, { 
          render: "Failed to send enquiry. Try again later!", 
          type: "error", 
          isLoading: false, 
          autoClose: 3000 
        });
      }
    } catch (error) {
      toast.update(loadingToast, { 
        render: "Failed to send enquiry. Try again later!", 
        type: "error", 
        isLoading: false, 
        autoClose: 3000 
      });
        }
};
  return(
  <div className="container mx-auto px-6 mt-24 pt-4">

  <div>
    {/* Hero Slider - Full Width */}
    <div className="w-full">
      <HeroSlider />
    </div>

    {/* Director's Desk Section  */}
    <div className="container mx-auto px-6 mt-12">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center">
        
        {/* Director's Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img 
            src="/images/director.jpeg" 
            alt="Director" 
            className="w-66 h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Director's Message */}
        <div className="w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0 md:pl-8">
          <h3 className="text-2xl font-bold text-primary mb-4">From the Director's Desk</h3>
          <p className="text-gray-700">
            "Our-quality is our brand and your faith is our strength. Vikas Gurukulam has built a reputation 
            for quality education, not by chance, but through dedication and student success. We focus on 
            individual learning, ensuring every student gets the guidance needed to excel in competitive exams."
          </p>
          <p className="mt-4 font-semibold">- Mr. Shailesh Kumar Mishra </p>
        </div>
      </div>
    </div>

    {/* About Us & Enquiry Section */}
    <div className="container mx-auto px-6 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* About Us Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-primary mb-4">About Vikas Gurukulam</h2>
          <p className="text-gray-700 leading-relaxed">
            Vikas Gurukulam was founded to provide a platform for students preparing for national-level 
            competitive exams. Since its inception, it has been a beacon of quality education, helping thousands 
            of students achieve success in their careers. 
            <br /><br />
            Our faculty is committed to individual growth, ensuring that students receive structured and 
            comprehensive learning experiences. With a well-planned syllabus and systematic guidance, we 
            empower students with knowledge and analytical skills.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            + More
          </button>
        </div>

        {/* Enquiry Now Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Enquire Now</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700 font-semibold">Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Course Interested In</label>
                    <select name="course" value={formData.course} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">Select a course</option>
                        <option>Class 1 to 5</option>
                        <option>Class 6 to 8</option>
                        <option>Class 9-10 (Academics)</option>
                        <option>Class 9-10 (Pre-Foundation)</option>
                        <option>Class 11-12 (Academics)</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Mobile Number</label>
                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Email ID</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Submit Enquiry
                </button>
            </form>
        </div>
      </div>
    </div>

    {/* Courses Section */}
    <div className="container mx-auto px-6 mt-12">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Class 1 to 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="/images/card1.jpg" alt="Class 1 to 5" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-primary">Class 1 to 5</h3>
        </div>

        {/* Class 6 to 8 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="/images/card2.webp" alt="Class 6 to 8" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-primary">Class 6 to 8</h3>
        </div>

        {/* Class 9 and 10 (Academics & Pre-Foundation) */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="/images/card3.jpg" alt="Class 9 and 10" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-primary">Class 9 & 10 (Academics & Pre-Foundation)</h3>
        </div>

        {/* Class 11 and 12 (Academics) */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="/images/card4.webp" alt="Class 11 and 12" className="w-full h-40 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-bold text-primary">Class 11 & 12 (Academics)</h3>
        </div>

      </div>
    </div>
  </div>
  </div>
  

 
  
);
}

export default Home;

