import { useState } from "react";

const usePasswordSignUp = () => {
    const [password, setPassword] = useState("");
    const [passwordOk, setPasswordOk] = useState(true);
    const [passfocused, setpassFocused] = useState(false);
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        setPasswordOk(passwordRegex.test(e.target.value));
    };

    return [password, passwordOk, passfocused, setpassFocused, handlePasswordChange]
};

export default usePasswordSignUp;