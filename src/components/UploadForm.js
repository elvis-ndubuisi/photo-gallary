import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  function handleUpload(e) {
    let selected = e.target.files[0];
    const ext = ["image/png", "image/jpeg"];

    if (selected && ext.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null); //set input value to null.
      setError("Please select an image of a valid type(.png, .jpg)");
    }
  }

  return (
    <form>
      <input type="file" onChange={handleUpload} />
      <div className="output">
        {/* outputs the error div if we have an error */}
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}
