import axios from "axios";

let axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { "Content-type": "application/json" },
    timeout: 4000,
});

export default axiosClient;
