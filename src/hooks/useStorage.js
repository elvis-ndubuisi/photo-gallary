import { getDownloadURL, uploadBytesResumable } from "@firebase/storage";
import { useState, useEffect } from "react";
import { storage, database } from "../firebase/config";
import { ref } from "firebase/storage";
import { Timestamp, collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null); //image url from firebase storage.

  useEffect(() => {
    // referece to the storage bucket
    const storageRef = ref(storage, "fx-" + file.name);

    uploadBytesResumable(storageRef, file).on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      () => {
        // Get Url of uploaded image
        getDownloadURL(storageRef).then((url) => {
          setUrl(url);

          try {
            // save image url to firebase database
            addDoc(collection(database, "images"), {
              url: url,
              createdAt: Timestamp.now(),
            });
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
