import React, { createContext, useContext, useState, useEffect } from "react";

export const GalleryContext = createContext({
    category: "default",
    images: [],
    setCategory: () => {},
});





export const GalleryProvider = ({ children }) => {
    const [category, setCategory] = useState("nature");
    const [image, setImages] = useState("");

    const fetchImagesCategory = (category) => {
       
        if (category === "nature") {
            setImages("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww")
        }
        else if (category === "city") {
            setImages("https://plus.unsplash.com/premium_photo-1682449558370-f3ef8450b1fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D")
        }
        else if (category === "food")
            setImages("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    };

    useEffect(() => {
        fetchImagesCategory(category);
        console.log("category--->"+category);
    }, [category]);
    return (
        <GalleryContext.Provider value={{ category, image, setCategory }}>
            {children}
        </GalleryContext.Provider>
    )
}