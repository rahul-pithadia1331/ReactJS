import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";


const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};
createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
