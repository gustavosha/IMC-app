import React, { useState } from 'react';
import Input from './components/Input/Input';
import BotaoCalcular from './components/BotaoCalcular/BotaoCalcular';
import ResultadoIMC from './components/ResultadoIMC/ResultadoIMC';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(0);

  const calcularIMC = () => {
    const alturaEmMetros = altura / 100;
    const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
    setImc(imcCalculado);
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <Input label="Altura (cm)" value={altura} onChange={(e) => setAltura(e.target.value)} />
      <Input label="Peso (kg)" value={peso} onChange={(e) => setPeso(e.target.value)} />
      <BotaoCalcular onClick={calcularIMC} />
      <ResultadoIMC imc={imc} />
    </div>
  );
}

export default App;
