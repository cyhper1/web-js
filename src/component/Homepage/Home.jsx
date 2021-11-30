import './Home.css';
import { Button } from 'react-bootstrap';
import { BiGame } from "react-icons/bi";

function Home() {
  return (
    <div >
      <h1 className='Information'>Selamat Datang di</h1>
      <h2 className='Information2'>Indonity Roleplay</h2>
      <header className='ButtonPlay'>
      <Button href="https://discord.gg/QcCSBnu5es" size="lg"> <BiGame /> Play Now!</Button>
      </header>
    </div>
  )
}

export default Home
