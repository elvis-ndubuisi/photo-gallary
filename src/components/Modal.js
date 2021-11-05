import React from "react";

export const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleBackdrop = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="backdrop" onClick={handleBackdrop}>
      <img src={selectedImg} alt=" enlarged display " />
    </div>
  );
};
