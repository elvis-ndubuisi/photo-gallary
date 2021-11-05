import { useState, useEffect } from "react";
import { database } from "../firebase/config";
import { collection, onSnapshot, orderBy } from "firebase/firestore";

const useFireStore = (coll) => {
  const [docs, setDocs] = useState([]);

  useEffect(
    function () {
      const unsubscribe = onSnapshot(
        collection(database, coll),
        orderBy("createdAt", "desc"),
        (snapShot) => {
          const documents = [];
          snapShot.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs(documents);
        }
      );
      return () => unsubscribe();
    },
    [coll]
  );

  return { docs };
};

export default useFireStore;
