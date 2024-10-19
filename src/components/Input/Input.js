import React from 'react';

function Input({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input 
        type="number" 
        value={value} 
        onChange={onChange} 
        placeholder={`Insira o valor de ${label}`}
      />
    </div>
  );
}

export default Input;
