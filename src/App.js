import logo from "./logo.svg";
import "./App.css";
import Menu from "./layouts/Menu";
import Index from "./home/Index";
import Footer from "./layouts/Footer";
import BaseRoute from "./BaseRoute";

import { useEffect, useState } from "react";
import API from "../src/services";

function App() {
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   API.get('social-media/list').then((result) => {
  //     if (result.message === "success") {
  //         setData(result.data);
  //         // setIsLoading(false);
  //         console.log(result.data);
  //     }
  //   });
  // });

  return (
    <>
      <Menu />
      <BaseRoute />
      <Footer />
    </>
  );
}

export default App;
