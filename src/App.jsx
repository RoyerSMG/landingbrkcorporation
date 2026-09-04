import { useState } from 'react'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Main } from './components/Main'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // Animar solo una vez al hacer scroll
    });
  }, []);

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App
