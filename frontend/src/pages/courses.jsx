// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const coursesData = [
//   { range: "Class 1 to 3", fee: "₹ 550 per month" },
//   { range: "Class 4 and 5", fee: "₹ 650 per month" },
//   { range: "Class 6 to 8", fee: "₹ 850 per month" },
//   { range: "Class 9 and 10 (Academics)", fee: "₹ 1250 per month" },
//   { range: "Class 9 and 10 (Pre-Foundation)", fee: "₹ 20,000 (One Year Course)" },
//   { range: "Class 11 and 12 (Commerce)", fee: "₹ 1650 per month" },
//   { range: "Class 11 and 12 (Science - PCM/PCB)", fee: "₹ 1850 per month" },
// ];

// const Courses = () => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <div className="container mx-auto px-6 mt-24 pt-4">

//     <div className="min-h-screen bg-gray-50 py-16 px-6">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-primary mb-8">Our Courses</h1>
//         <p className="text-center text-gray-700 mb-12">
//           Explore our structured curriculum for students from <b>Class 1 to 12</b>. Click on a class range to view its fee.
//         </p>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {coursesData.map((course, index) => (
//             <div
//               key={index}
//               onClick={() => setSelected(index)}
//               className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300
//                 ${selected === index ? "bg-blue-600 text-white scale-105 shadow-lg" : "bg-white text-gray-900"}
//               `}
//             >
//               <h2 className="text-xl font-semibold">{course.range}</h2>
//             </div>
//           ))}
//         </div>

//         {/* Fee Display Section */}
//         {selected !== null && (
//           <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-center">
//             <h3 className="text-2xl font-bold text-primary mb-4">Fee Structure</h3>
//             <p className="text-gray-700 text-lg">{coursesData[selected].range} - <b>{coursesData[selected].fee}</b></p>
//           </div>
//         )}

//         {/* Enroll Now Button */}
//         <div className="text-center mt-12">
//           <Link to="/contact" className="bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition">
//             Enroll Now
//           </Link>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Courses;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const coursesData = [
  { range: "Class 1 to 3", fee: "₹ 550 per month" },
  { range: "Class 4 and 5", fee: "₹ 650 per month" },
  { range: "Class 6 to 8", fee: "₹ 850 per month" },
  { range: "Class 9 and 10 (Academics)", fee: "₹ 1250 per month" },
  { range: "Class 9 and 10 (Pre-Foundation)", fee: "₹ 20,000 (One Year Course)" },
  { range: "Class 11 and 12 (Commerce)", fee: "₹ 1650 per month" },
  { range: "Class 11 and 12 (Science - PCM/PCB)", fee: "₹ 1850 per month" },
];
const Courses = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleEnroll = () => {
    if (selected !== null) {
      navigate("/contact", { state: { course: coursesData[selected] } });
    }
  };

  return (
    <div className="container mx-auto px-6 mt-24 pt-4">
      <div className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-primary mb-8">Our Courses</h1>
          <p className="text-center text-gray-700 mb-12">
            Explore our structured curriculum for students from <b>Class 1 to 12</b>. Click on a class range to view its fee.
          </p>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300
                  ${selected === index ? "bg-blue-600 text-white scale-105 shadow-lg" : "bg-white text-gray-900"}
                `}
              >
                <h2 className="text-xl font-semibold">{course.range}</h2>
              </div>
            ))}
          </div>

          {/* Fee Display Section */}
          {selected !== null && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Fee Structure</h3>
              <p className="text-gray-700 text-lg">{coursesData[selected].range} - <b>{coursesData[selected].fee}</b></p>
            </div>
          )}

          {/* Enroll Now Button */}
          <div className="text-center mt-12">
            <button onClick={handleEnroll} className="bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
