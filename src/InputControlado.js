
import React, { useState } from 'react';

function InputControlado() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Valor: {inputValue}</p>
    </div>
  );
}

export default InputControlado;
/* InputControlado mantém o valor de um campo de texto no estado e exibe esse valor abaixo do input à medida que é digitado */