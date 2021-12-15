import './Home.css';
import { Button } from 'react-bootstrap';
import { SiRobotframework } from "react-icons/si";

function Home() {
  return (
    <div >
      <h1 className='Information'>Welcome To This bot</h1>
      <h2 className='Information2'>Chyper Primary</h2>
      <header className='ButtonPlay'>
      <Button href="https://discord.gg/QcCSBnu5es" size="lg"> <SiRobotframework /> Invite Now!</Button>
      </header>
    </div>
  )
}

export default Home
