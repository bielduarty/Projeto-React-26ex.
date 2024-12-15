import React, { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Cadastro;
/* O resultado esperado do componente Cadastro é um formulário funcional onde o usuário pode preencher nome email e senha, ao clicar no botão "Enviar" os dados preenchidos são exibidos em um alerta no formato: Nome: [nome], Email: [email], Senha: [senha], demonstrando a captura e manipulação de dados do formulário. */