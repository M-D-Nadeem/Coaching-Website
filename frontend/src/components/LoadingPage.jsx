import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingPage = ({ onFinish }) => {
  useEffect(() => {
    setTimeout(onFinish, 2000);
  }, []);

  return (
    <motion.div className="flex justify-center items-center h-screen bg-blue-500 text-white text-2xl"
      initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 2 }}>
      Loading Vikas Gurukulam...
    </motion.div>
  );
};

export default LoadingPage;
