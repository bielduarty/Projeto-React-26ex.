import React, { useState, useEffect } from 'react';

function Relogio() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

   
    return () => clearInterval(intervalId);
  }, []); 

  return <p className='TECH'>Hora atual: {time}</p>;
}

export default Relogio;
/* Relógio exibe a hora atual e atualiza a cada segundo usando setInterval. O intervalo é limpo quando o componente é desmontado para evitar vazamentos de memória. */