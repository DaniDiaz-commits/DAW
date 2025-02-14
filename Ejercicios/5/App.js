import React from "https://esm.sh/react@19.0.0-beta-04b058868c-20240508/?dev";
import ReactDOMClient from "https://esm.sh/react-dom@19.0.0-beta-04b058868c-20240508/client/?dev";

const App = () => {
  return React.createElement("div", {}, "Hola, React 19");
};

ReactDOMClient.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);