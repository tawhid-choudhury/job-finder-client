import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import axiosJobFinder from "../api/axiosJobFinder";

const useAuthFunctions = (setErrorText, email) => {
    const { googleSignin } = useContext(AuthContext)
    const nav = useNavigate();
    const location = useLocation();


    const handleGoogle = () => {
        googleSignin()
            .then((uc) => {
                console.log(uc);
                const ue = { email };
                axiosJobFinder.post("/jwt", ue, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            swal("Complete!", "Account created!", "success");
                            nav(location?.state ? location.state : "/")
                        }
                    })
            }).catch((err) => {
                if (err.code === "auth/email-already-in-use") {
                    swal("Error!", "Email is already in use. Please choose a different email.", "error");
                    setErrorText("Email is already in use");
                } else {
                    swal("Error:", err);
                    setErrorText("Error:", err);
                    console.log(err);
                }
            })
    }
    return [handleGoogle]
};

export default useAuthFunctions;