import "./App.css";

import "./js/Hsongscript";
import React, { useState} from "react";
import Navbar from "./comps/Navbar";
import SignUpForm from "./comps/SignUpForm";
import Footer from "./comps/Footer";
import Tabs from "./comps/Tabs";
import Queue from "./comps/Queue";
import Main from "./comps/Main";
import "./css/Stylesheet_main.css";

function App() {

  const [isLogged, setisLogged] = useState(sessionStorage.getItem("isLogged")),
  [username, setusername] = useState(""),
  [password, setpassword] = useState("");


  if (sessionStorage.getItem("isLogged") === false || !isLogged) {
    return (
      <SignUpForm
        uname={username}
        pwd={password}
        setuname={setusername}
        setpwd={setpassword}
        setisLogged={setisLogged}
      ></SignUpForm>
    );
  }


  return (
    isLogged && (
      <>
        <>
          <Navbar isLogged={isLogged} />
          <div className="container" style={{ marginLeft: "1px", maxWidth: "99.9vw", height: "40vh" }} >
            <div className="row" style={{ height: "80vh" }}>
              <Tabs />
              <Main />
              <Queue />
            </div>
          </div>
        </>
        <Footer />
      </>
    )
  );
}

export default App;
