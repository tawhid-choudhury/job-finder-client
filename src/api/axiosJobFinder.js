import axios from "axios";

const baseURL = "https://assignment-11-server-one-psi.vercel.app"; // Replace with your API's base URL

const axiosJobFinder = axios.create({
  baseURL,
});

export default axiosJobFinder;
