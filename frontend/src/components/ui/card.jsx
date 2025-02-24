import React from "react";

export const Card = ({ children }) => (
  <div className="bg-gray-100 p-4 shadow-md rounded-lg">{children}</div>
);

export const CardContent = ({ children }) => <div>{children}</div>;
