import { useEffect } from "react";

const FilterSelection = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "src/script.js";
        script.async = true;
        document.body.appendChild(script);
        // return () => {
        //     document.body.removeChild(script);
        // };
    }, []);

    return (
         <div>
            
         </div>
    );
}

export default FilterSelection;