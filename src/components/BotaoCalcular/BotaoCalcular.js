import React from 'react';

function BotaoCalcular({ onClick }) {
  return (
    <button onClick={onClick}>
      Calcular IMC
    </button>
  );
}

export default BotaoCalcular;
