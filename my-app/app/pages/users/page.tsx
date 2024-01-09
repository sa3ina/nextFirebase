"use client";
import React from "react";
import app from "@/app/firebase/config";
import { getFirestore, limit } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
type Props = {};

const Users = (props: Props) => {
  const [firestoredata, setfirestoreData] = useState<Fire[]>([]);
  interface Fire {
    id: string;
    name: string;
    password: string;
  }
  const getDataFirestone = async () => {
    const db = getFirestore(app);
    let arr: Fire[] = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let obj: Fire = {
        id: doc.id,
        name: doc.data().name,
        password: doc.data().password,
      };

      arr.push(obj);
      console.log("arr", arr);
      setfirestoreData(arr);
    });
  };
  useEffect(() => {
    getDataFirestone();
  }, []);

  return (
    <div>
      Users
      <ul>
        {firestoredata &&
          firestoredata.map((elem, i) => {
            return <li key={i}>{elem.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Users;
