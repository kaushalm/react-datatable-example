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
      });
  }, []);

  function search(event) {
    let filtered = data.filter(d => {
      let serchabledata = d.userId + d.id + d.title + d.body;
      if (serchabledata.includes(event.target.value)) {
        return d;
      }
    });

    if (filtered.length > 0) {
      setData(filtered);
    } else {
      //set back to original dta array
      //figure out how to preserve data between renders other than using redux
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
