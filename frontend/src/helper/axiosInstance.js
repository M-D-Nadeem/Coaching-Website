import axios from "axios";

const axiosInstance=axios.create()

axiosInstance.defaults.baseURL="https://coaching-website-backend.vercel.app"
axiosInstance.defaults.withCredentials=true

export default axiosInstance