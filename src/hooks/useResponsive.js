import { useState, useEffect } from "react";

const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 360);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
};

export default useResponsive;