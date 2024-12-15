import React, { useState, useEffect } from 'react';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>
        Alternar para {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  );
}

export default DarkMode;
/* DarkMode permite alternar entre os modos claro e escuro. O estado da preferência é salvo no localStorage e aplicado ao corpo da página, mantendo a escolha mesmo após recarregar a página. O usuário pode alternar o modo ao clicar em um botão. */