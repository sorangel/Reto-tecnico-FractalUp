import ReactDOM from "react-dom/client";
import { ROOT_ELEMENT } from "./constants.tsx";
import { App } from "./App.tsx";
import "./infrastructure/styles/global.scss";

ReactDOM.createRoot(ROOT_ELEMENT).render(<App />);
