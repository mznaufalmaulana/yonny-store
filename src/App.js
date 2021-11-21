import logo from "./logo.svg";
import "./App.css";
import Menu from "./layouts/Menu";
import Index from "./home/Index";
import Footer from "./layouts/Footer";
import BaseRoute from "./BaseRoute";

function App() {
  return (
    <>
      <Menu />
      <BaseRoute />
      <Footer />
    </>
  );
}

export default App;
