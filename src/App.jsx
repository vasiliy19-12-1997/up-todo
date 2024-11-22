import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Componets/Router/AppRouter";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
