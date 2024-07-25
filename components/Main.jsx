import { useContext } from "react";
import AuthContext from "../hooks/AuthContext";
import Login from "./Login";
import { Home } from "./Home";

export function Main() {
  const { auth } = useContext(AuthContext);

  return !auth ? <Login /> : <Home />;
}
