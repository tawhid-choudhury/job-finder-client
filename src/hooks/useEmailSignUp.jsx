import { useState } from "react";


const useEmailSignUp = () => {
    const [email, setEmail] = useState("");
    const [emailOk, setEmailOk] = useState(true);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        console.log(email, emailRegex.test(email));
        setEmailOk(emailRegex.test(e.target.value));
        if (!e.target.value) {
            setEmailOk(true);
        }
    };
    return [email, emailOk, handleEmailChange]
};

export default useEmailSignUp;