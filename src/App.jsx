import { createContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Componets/Router/AppRouter";
import { Navbar } from "./Componets/UI/Navbar/Navbar";
export const AuthContext = createContext("auth");
export default function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth, loading]}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
