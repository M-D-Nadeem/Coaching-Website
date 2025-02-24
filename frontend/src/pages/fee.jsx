import React from "react";

const Fee = () => {
  return (
    <div className="container mx-auto px-6 mt-24 pt-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">Fee Structure</h2>

      {/* Fee Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Class</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Fees (Per Month)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Class 1 to 3</td>
              <td className="border border-gray-300 px-4 py-2">₹ 550.00 /-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Class 4 and 5</td>
              <td className="border border-gray-300 px-4 py-2">₹ 650.00 /-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Class 6 to 8</td>
              <td className="border border-gray-300 px-4 py-2">₹ 850.00 /-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Class 9 and 10 (Academics)</td>
              <td className="border border-gray-300 px-4 py-2">₹ 1250.00 /-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Class 9 and 10 (Pre-Foundation)</td>
              <td className="border border-gray-300 px-4 py-2">₹ 20,000.00 /- (One-time Payment)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Class 11 and 12 (Academics) - Commerce</td>
              <td className="border border-gray-300 px-4 py-2">₹ 1650.00 /-</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Class 11 and 12 (Academics) - PCM/PCB</td>
              <td className="border border-gray-300 px-4 py-2">₹ 1850.00 /-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Library Fee Section */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-primary mb-4">Library Charges</h3>
        <div className="space-y-2">
          <p className="text-gray-700"><span className="font-semibold">Morning or Evening Shift:</span> ₹ 400/- Per Month</p>
          <p className="text-gray-700"><span className="font-semibold">Full Day:</span> ₹ 700/- Per Month</p>
        </div>
      </div>
    </div>
  );
};

export default Fee;
