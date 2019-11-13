import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pagination } from "antd";
import "antd/dist/antd.css";

const PAGE_SIZE = 5;

function App() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(PAGE_SIZE);

  useEffect(() => {
    fetch("https://api.github.com/gists/public")
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const handleChange = page => {
    setCurrent(page);
    setMinIndex((page - 1) * PAGE_SIZE);
    setMaxIndex(page * PAGE_SIZE);
  };

  return (
    <div>
      <h1>Git Hub Accounts</h1>
      <ul>
        {data.map(
          (data, index) =>
            index >= minIndex &&
            index < maxIndex && <li key={data.id}>{data.owner.login}</li>
        )}
      </ul>
      {data.length > 0 && (
        <Pagination
          pageSize={PAGE_SIZE}
          current={current}
          total={data.length}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
