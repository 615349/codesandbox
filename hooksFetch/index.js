import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=5"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

