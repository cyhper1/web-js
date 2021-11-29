import logo from '../../chat.svg'
import './Home.css';
import { Button } from 'react-bootstrap';
import { BiGame } from "react-icons/bi";

function Home() {
  return (
    <div >
      <h1 className='Information'>Selamat Datang di</h1>
      <h2 className='Information2'>Indonesia City Roleplay</h2>
      <header className='ButtonPlay'>
      <Button href="https://discord.gg/pUChbTy3" size="lg"> <BiGame /> Play Now!</Button>
      </header>
    </div>
  )
}

export default Home
