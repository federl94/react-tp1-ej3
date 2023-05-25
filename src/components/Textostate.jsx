import { useState } from "react";

const Textostate = (props) => {
  const agregarFrase = () => {
    props.setMsj("(from changed state)");
  };

  return (
    <>
      <button onClick={agregarFrase}>Agregar frase</button>
    </>
  );
};

export default Textostate;
