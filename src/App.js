import React from "react";
import { useState, useEffect } from "react";
import Datatable from "./Datatable";
import "./style.css";
require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        setData(json);
      });
  }, []);

  return (
    <div>
      <input type="text" />
      <Datatable data={data} />
    </div>
  );
}
