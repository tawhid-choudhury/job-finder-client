import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../../firebase/firebase.config";
import swal from "sweetalert";

const axiosInstance = axios.create({
    baseURL: "https://assignment-11-server-one-psi.vercel.app",
    withCredentials: true
})

const useAxiosInstance = () => {
    // const { logout } = useContext(AuthContext);

    useEffect(() => {
        axiosInstance.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log("_________________________________________", error.response);
            if (error.response.status === 401 || error.response.status === 401) {
                console.log("asd");
                signOut(auth)
                    .then(swal("Timed Out!", "", "warning"))
            }
        })
    }, [])

    return axiosInstance;
};

export default useAxiosInstance;