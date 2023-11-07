import axios from "axios";

const baseURL = "http://localhost:5000"; // Replace with your API's base URL

const axiosJobFinder = axios.create({
  baseURL,
});

export default axiosJobFinder;
