import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const useAuthFunctions = (setErrorText) => {
    const { googleSignin } = useContext(AuthContext)
    const nav = useNavigate();


    const handleGoogle = () => {
        googleSignin()
            .then((uc) => {
                console.log(uc);
                swal("Complete!", "Account Created!", "success");
                nav("/")
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