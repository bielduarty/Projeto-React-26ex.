import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;
/* O componente Contador exibe um valor numérico que pode ser incrementado ou decrementado por meio de botões. Ele utiliza o estado para atualizar e refletir as mudanças na contagem em tempo real. */