/* eslint-env browser */
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import SearchParams from "./SearchParams";
import Details from "./Details";
import ApotedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ApotedPetContext.Provider value={adoptedPet}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </ApotedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

// get our html root, the div that would contain our entire application
const container = document.getElementById("root");

// create a root for your REACTDOM which you create with your container
const root = createRoot(container);

// unto your root, you render your main App
root.render(<App />);
