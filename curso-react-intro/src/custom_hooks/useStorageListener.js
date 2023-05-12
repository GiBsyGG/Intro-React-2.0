import React from "react";
import { useState } from "react";

// Esto es un HOC, un Higher Order Component, es una función que recibe un componente y retorna otro componente
function useStorageListener(sincronize) {
  // Estado para saber si hubo un cambio en el localStorage
  const [sotrageChange, setSotrageChange] = useState(false);

  // Compromabos si hubo un cambio en el localStorage referente a la key "TODOS_V1"
  window.addEventListener("storage", (event) => {
    if (event.key === "TODOS_V1") {
      setSotrageChange(true);
    }
  });

  const toggleShow = () => {
    // Actualizamos los ToDos sincronizandolos
    sincronize();

    setSotrageChange(false);
  };

  return (
    {show: sotrageChange,
    toggleShow}
  );
}

export { useStorageListener };
