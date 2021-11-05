import React from "react";

export const Modal = ({ selectedImg }) => {
  return (
    <div className="backdrop">
      <img src={selectedImg} alt=" enlarged display " />
    </div>
  );
};
