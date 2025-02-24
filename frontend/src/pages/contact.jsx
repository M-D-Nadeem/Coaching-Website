

// import React, { useState } from "react";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { useLocation } from "react-router-dom";

// const ContactUs = () => {
//   const location = useLocation();
//   const course = location.state?.course || { range: "N/A", fee: "N/A" };
//   console.log(course);
  
//   const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const response = await fetch("http://localhost:7000/api/sendMail", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify({ ...formData, course: course.range }),
//   //   });

//   //   const data = await response.json();
//   //   alert(data.message);
//   // };
//   const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const loadingToast = toast.loading("Sending enquiry...");
//           const response = await axiosInstance.post("/lms/contactUs", { ...formData, course: course });        
//           if(response.data.success){
//           toast.update(loadingToast, { 
//             render: "Enquiry sent successfully!", 
//             type: "success", 
//             isLoading: false, 
//             autoClose: 3000 
//           });        
//           setFormData({ name: "", course: "", mobile: "", email: "" });
//         }else{
//           toast.update(loadingToast, { 
//             render: "Failed to send enquiry. Try again later!", 
//             type: "error", 
//             isLoading: false, 
//             autoClose: 3000 
//           });
//         }
//       } catch (error) {
//         toast.update(loadingToast, { 
//           render: "Failed to send enquiry. Try again later!", 
//           type: "error", 
//           isLoading: false, 
//           autoClose: 3000 
//         });
//           }
//   };

//   return (
//     <div className="container mx-auto px-6 mt-24 pt-4">
//       <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
//         <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
//         <p className="text-lg text-gray-600 mb-8 text-center">Have questions? Get in touch with us!</p>

//                {/* Contact Info */}
//       <div className="flex flex-wrap justify-center gap-8 w-full max-w-4xl">
//          {/* Address */}
//          <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md w-80">
//            <FaMapMarkerAlt className="text-primary text-3xl mr-4" />
//            <div>
//              <h2 className="text-xl font-semibold">Our Location</h2>
//              <p className="text-gray-700">Vikas Gurukulam, Naipura Kalan Varanasi, Uttar Pradesh</p>
//            </div>
//          </div>

//          {/* Phone */}
//          <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md w-80">
//            <FaPhoneAlt className="text-primary text-3xl mr-4" />
//            <div>
//              <h2 className="text-xl font-semibold">Call Us</h2>
//              <p className="text-gray-700">+91 79055 32763
                   
//              </p>
//            </div>
//          </div>

//          {/* Email */}
//          <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md w-80">
//            <FaEnvelope className="text-primary text-3xl mr-4" />
//            <div>
//              <h2 className="text-xl font-semibold">Email Us</h2>
//              <p className="text-gray-700">vikasgurukulam0702@gmail.com</p>
//            </div>
//          </div>
//        </div>

//         {/* Contact Form */}
//         <div className="mt-6 w-full max-w-2xl bg-gray-100 p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-semibold text-primary mb-4">Send Us a Message</h2>
//           <form onSubmit={"handleSubmit"} className="flex flex-col gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Your Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//               className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//             <button type="submit" className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import axiosInstance from "../helper/axiosInstance";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
    const location = useLocation();
  const course = location.state?.course || { range: "N/A", fee: "N/A" };
  console.log(course);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loadingToast = toast.loading("Sending message...");
      const response = await axiosInstance.post("/lms/contactUsMail", {...formData,course:course});
      console.log(response);
      
      if (response.data.success) {
        toast.update(loadingToast, {
          render: "Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.update(loadingToast, {
          render: "Failed to send message. Try again later!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.update(loadingToast, {
        render: "Failed to send message. Try again later!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container mx-auto px-6 mt-24 pt-4">
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Have questions? Get in touch with us!
        </p>

        <div className="flex flex-wrap justify-center gap-8 w-full max-w-4xl">
          <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md w-80">
            <FaMapMarkerAlt className="text-primary text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Our Location</h2>
              <p className="text-gray-700">
                Vikas Gurukulam, Naipura Kalan Varanasi, Uttar Pradesh
              </p>
            </div>
          </div>

          <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md w-80">
            <FaPhoneAlt className="text-primary text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Call Us</h2>
              <p className="text-gray-700">+91 79055 32763</p>
            </div>
          </div>

          <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md w-80">
            <FaEnvelope className="text-primary text-3xl mr-4" />
            <div>
              <h2 className="text-xl font-semibold">Email Us</h2>
              <p className="text-gray-700">vikasgurukulam0702@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 w-full max-w-2xl bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Send Us a Message
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
