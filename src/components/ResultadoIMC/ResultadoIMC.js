import React from 'react';

function ResultadoIMC({ imc }) {
  return (
    <div>
      {imc > 0 && <h2>Seu IMC é: {imc.toFixed(2)}</h2>}
    </div>
  );
}

export default ResultadoIMC;