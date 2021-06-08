import React, { useState } from "react";
import "./styles.css";

export default function Challenge() {
  const [elementSelected, setElementSelected] = useState(0);

  const arrayCity = [
    "New York",
    "Minesota",
    "South Carolina",
    "Missouri",
    "Delaware",
  ];

  return (
    <ul>
      {arrayCity.map((city, index) => {
        return (
          <li
            className={`${elementSelected === index + 1 ? "selected" : null}`}
            onClick={() => {
              setElementSelected(index + 1);
            }}
          >
            {city}
          </li>
        );
      })}
    </ul>
  );
}
