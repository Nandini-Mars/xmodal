import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserDetails from "./components/UserDetails";
import FormModal from "./components/FormModal";

function App() {
  return (
    <>
      <div>
        <UserDetails />
      </div>
    </>
  );
}

export default App;
