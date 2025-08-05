import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="rating gap-1">
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-red-400"
          aria-label="1 star"
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-orange-400"
          aria-label="2 star"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-yellow-400"
          aria-label="3 star"
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-lime-400"
          aria-label="4 star"
        />
        <input
          type="radio"
          name="rating-3"
          className="mask mask-heart bg-green-400"
          aria-label="5 star"
        />
      </div>
    </>
  );
}

export default App;
