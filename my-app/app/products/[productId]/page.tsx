"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {};

const Detail = (props: Props) => {
  const [data, setData] = useState<{ id: Number; name: String }[]>([]);
  const params = useParams();
  useEffect(() => {
    axios("http://localhost:3000/api/products/" + params.productId).then(
      (res) => {
        setData(res.data);
      }
    );
  }, []);
  return (
    <div>
      {data && (
        <>
          <h1>{data.name}</h1>
        </>
      )}
    </div>
  );
};

export default Detail;
