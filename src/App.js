import logo from "./logo.svg";
import "./App.css";
import Menu from "./layouts/Menu";
import Footer from "./layouts/Footer";
import BaseRoute from "./BaseRoute";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Menu />
        <BaseRoute />
        <Footer />
      </BrowserRouter>
  );
}
export default App;
