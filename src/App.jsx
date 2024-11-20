import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DefaultPage } from "./Componets/Pages/DefaultPage/DefaultPage";
import { Home } from "./Componets/Pages/Home/Home";
import { Link1 } from "./Componets/Pages/Link1/Link1";
import { Link2 } from "./Componets/Pages/Link2/Link2";
import { Link3 } from "./Componets/Pages/Link3/Link3";
import { Link4 } from "./Componets/Pages/Link4/Link4";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Link1" element={<Link1 />} />
          <Route path="Link2" element={<Link2 />} />
          <Route path="Link3" element={<Link3 />} />
          <Route path="Link4" element={<Link4 />} />
        </Route>
        <Route path="/default" element={<DefaultPage />} />
      </Routes>
    </BrowserRouter>
  );
}
