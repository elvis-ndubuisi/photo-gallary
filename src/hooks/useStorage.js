import { useState, useEffect } from "react";
import { storage } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null); //image url from firebase storage.

  useEffect(
    function () {
      const storageRef = storage.ref(file.name);

      storageRef.put(file).on(
        "state_changed",
        function (snap) {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        function (err) {
          setError(err);
        },
        async function () {
          setUrl(await storageRef.getDownloadedURL());
        }
      );
    },
    [file]
  ); //function is fired whenever the file dependency changes

  return { progress, url, error };
};

export default useStorage;
