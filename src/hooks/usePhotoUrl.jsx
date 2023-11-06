import { useEffect, useState } from "react";


const usePhotoUrl = () => {
    const [photoUrl, setPhotoUrl] = useState("");
    const [photoUrlOk, setPhotoUrlOk] = useState(true);
    const [avater, setAvater] = useState(false);
    const [imageloaded, setImageloaded] = useState(false);
    useEffect(() => {
        if (photoUrl && photoUrlOk) {
            setAvater(true)
        }
    }, [photoUrl, photoUrlOk])
    const handlePhotoUrlChange = (e) => {
        setPhotoUrl(e.target.value);
        const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff)$/i;
        setPhotoUrlOk(imageExtensions.test(e.target.value));
        if (!e.target.value) {
            setPhotoUrlOk(true);
        }
    };
    return [photoUrl, photoUrlOk, avater, imageloaded, setImageloaded, handlePhotoUrlChange];
};

export default usePhotoUrl;