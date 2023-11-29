/* eslint-env browser */
import { createRoot } from "react-dom";

import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet animal="Dog" name="Tasha" breed="German Shepherd" />
      <Pet animal="Cat" name="Lennon" breed="mixed" />
      <Pet animal="Horse" name="Jim" breed="Stallion" />
    </div>
  );
};

// get our html root, the div that would contain our entire application
const container = document.getElementById("root");

// create a root for your REACTDOM which you create with your container
const root = createRoot(container);

// unto your root, you render your main App
root.render(<App />);
