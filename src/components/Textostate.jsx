import { useState } from "react";

const Textostate = (props) => {
  const [msj, setMsj] = useState("");

  const agregarFrase = () => {
    setMsj("(from changed state)");
  };

  return (
    <>
      <button onClick={agregarFrase}>Clickea aquí</button>
      {props.children(msj)}
    </>
  );
};

export default Textostate;
