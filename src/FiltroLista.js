import React, { useState } from 'react';

function FiltroLista() {
  const [search, setSearch] = useState('');
  const items = ['Banana', 'Maçã', 'Laranja', 'Manga', 'Uva'];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltroLista;
/* FiltroLista permite ao usuário filtrar uma lista de frutas com base no que for digitado no campo de busca. Ele exibe os itens filtrados em tempo real conforme o texto de busca é atualizado. */