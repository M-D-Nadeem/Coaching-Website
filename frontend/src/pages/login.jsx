import React from "react";

const Login = () => (


  <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="text-2xl font-bold">Login</h2>
    <input type="email" placeholder="Email" className="border p-2 m-2" />
    <input type="password" placeholder="Password" className="border p-2 m-2" />
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
  </div>

);

export default Login;
