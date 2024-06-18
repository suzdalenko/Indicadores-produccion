import React, { useEffect } from 'react';

const Grafico = () => {
  useEffect(() => {
    document.title = "Grafico - Indicadores produccíon";
  }, []);

  return (
    <div>
      <h1>Grafico</h1>
    </div>
  );
};

export default Grafico;