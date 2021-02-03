import React from "react";

export default function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);

  function sort(e) {
    console.log(e.target.innerHTML);
  }

  return (
    <table>
      <thead>
        <tr onClick={sort}>
          {data[0] && columns.map(heading => <th>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row["id"]}>
            {columns.map(column => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
