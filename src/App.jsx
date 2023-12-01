/* eslint-env browser */
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "../Details";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

// get our html root, the div that would contain our entire application
const container = document.getElementById("root");

// create a root for your REACTDOM which you create with your container
const root = createRoot(container);

// unto your root, you render your main App
root.render(<App />);
