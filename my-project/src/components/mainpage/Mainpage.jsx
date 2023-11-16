// import React from "react";

// const Mainpage = () => {
//   return (
//     <div className="max-h-fit mx-4 my-8 flex justify-center flex-wrap">
//       <figure className="mx-4 my-4 border-8 rounded-lg border-custom-tan ">
//         <img src="https://unsplash.it/600/400" alt="" />
//       </figure>
//       <figure className="mx-4 my-4 border-8 rounded-lg border-custom-tan ">
//         <img src="https://unsplash.it/600/400" alt="" />
//       </figure>
//       <figure className="mx-4 my-4 border-8 rounded-lg border-custom-tan ">
//         <img src="https://unsplash.it/600/400" alt="" />
//       </figure>
//       <figure className="mx-4 my-4 border-8 rounded-lg border-custom-tan ">
//         <img src="https://unsplash.it/600/400" alt="" />
//       </figure>
//     </div>
//   );
// };

// export default Mainpage;


// 2.0 its now a lightbox

import React, { useState, useEffect } from "react";
import '../../index.css'; 
import Image1 from "../../images/Render til hjemmeside1.png" 
import Image2 from "../../images/Render til hjemmeside2.png"
import Image3 from "../../images/Render til hjemmeside3.png"
import Image4 from "../../images/Render til hjemmeside4.png"

const Mainpage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className=" mx-4 my-8 flex justify-center flex-wrap">
      {Array.from({ length: 2 }, (_, index) => (
        <figure
          key={index}
          className="mx-4 my-4 border-8 rounded-lg border-custom-tan cursor-pointer"
          onClick={() => openLightbox([Image1, Image2 ][index])}
        >
          <img src={[Image1, Image2 ][index]} alt="" />
        </figure>
      ))}

      {lightboxOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="max-w-screen-lg">
            <img
              src={selectedImage}
              alt=""
              className="w-full h-auto max-h-screen"
            />
            <button
              className="absolute top-4 right-4 text-white text-xl"
              onClick={closeLightbox}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mainpage;
