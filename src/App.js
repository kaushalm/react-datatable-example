import React from "react";
import { useState, useEffect } from "react";
import Datatable from "./Datatable";
import "./style.css";
require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchterm, setSearchTerm] = useState("");

  window.originaldata = [];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        setData(json);
        //console.log(json);
        window.originaldata = [...originaldata, ...json];
      });
  }, []);

  function search(event) {
    //console.log(window.originaldata);
    //console.log(event.target.value);
    let filtered = data.filter(d => {
      let serchabledata = d.userId + d.id + d.title + d.body;
      if (serchabledata.includes(event.target.value)) {
        return d;
      }
    });

    console.log(filtered);
    if (filtered.length > 0) {
      setData(filtered);
    } else {
      console.log(window.originaldata);
      setData(window.originaldata);
    }
  }

  return (
    <div>
      <input type="text" onChange={search} />
      <Datatable data={data} />
    </div>
  );
}
