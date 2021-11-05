import React from "react";
import useFireStore from "../hooks/useFireStore";

export const ImageGrid = () => {
  const { docs } = useFireStore("images");
  console.log(docs);
  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <div className="image-wrap" key={doc.id}>
              <img src={doc.url} alt="gallary" />
            </div>
          );
        })}
    </div>
  );
};
