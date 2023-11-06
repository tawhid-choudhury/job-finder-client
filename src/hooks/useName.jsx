import { useState } from "react";

const useName = () => {
    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return [name, handleNameChange]
};

export default useName;