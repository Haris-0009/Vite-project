import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contactheader from './components/Contactheader/Contactheader'
import Contactform from './components/Contactform/Contactform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <main className="main_container">
      <Contactheader/>
      <Contactform/>
    </main>
    
    </>
  );
};

export default App
