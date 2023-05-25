import React, { useState } from "react";
import Ejercicio3 from "./components/Ejercicio3";
import Textostate from "./components/Textostate";

function App() {
  const [msj, setMsj] = useState("");

  return (
    <>
      <h2>
        Hello <Ejercicio3 nuevaLinea="my friend!" msj={msj} />
      </h2>
      <Textostate setMsj={setMsj} />
    </>
  );
}

export default App;