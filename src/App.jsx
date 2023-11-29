/* eslint-env browser */
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams/> 
    </div>
  );
};

// get our html root, the div that would contain our entire application
const container = document.getElementById("root");

// create a root for your REACTDOM which you create with your container
const root = createRoot(container);

// unto your root, you render your main App
root.render(<App />);
