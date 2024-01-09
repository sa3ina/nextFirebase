"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
type Props = {};
import { useRouter } from "next/navigation";
const Products = (props: Props) => {
  const router = useRouter();

  const [data, setData] = useState<{ id: Number; name: String }[]>([]);
  useEffect(() => {
    axios("http://localhost:3000/api/products").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      Products
      <ul>
        {data &&
          data.map((elem, i) => {
            return (
              <li key={i}>
                {elem.name}{" "}
                <button
                  onClick={() =>
                    router.push("/products/" + elem.id, { scroll: false })
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Detail
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default Products;
