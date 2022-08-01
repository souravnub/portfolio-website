import axios from "axios";

let axiosClient = axios.create({
    baseURL:
        process.env.REACT_APP_CURRENT_ENV === "DEVELOPMENT"
            ? "http://localhost:5000"
            : process.env.REACT_APP_BACKEND_URL,
    headers: { "Content-type": "application/json" },
    timeout: 4000,
});

export default axiosClient;
