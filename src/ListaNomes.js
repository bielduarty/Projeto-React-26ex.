import React, { useState } from 'react';

function ListaNomes() {
  const [nomes, setNomes] = useState([]);
  const [novoNome, setNovoNome] = useState('');

  const adicionarNome = () => {
    setNomes([...nomes, novoNome]);
    setNovoNome('');
  };

  return (
    <div>
      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
      />
      <button onClick={adicionarNome}>Adicionar Nome</button>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNomes;
/* ListaNomes permite adicionar nomes a uma lista dinamica com o valor de cada nome sendo armazenado no estado. Ao clicar no botão, o nome digitado é adicionado à lista e o campo de entrada é limpo. */