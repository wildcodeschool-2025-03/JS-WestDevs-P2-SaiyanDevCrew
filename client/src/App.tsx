import { Outlet } from "react-router";
import "./App.css";
import CharacterCard from "./components/CharacterCard/CharacterCard";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
