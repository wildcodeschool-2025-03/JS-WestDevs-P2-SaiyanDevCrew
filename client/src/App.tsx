import "./App.css";
import Battlepage from "./pages/Battlepage/Battlepage";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Battlepage />
      <Outlet />
    </>
  );
}

export default App;
