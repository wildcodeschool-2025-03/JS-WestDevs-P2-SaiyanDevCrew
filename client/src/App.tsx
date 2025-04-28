import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loginpage from "./pages/Loginpage/Login";


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Loginpage/>
    </>
  );
}

export default App;
