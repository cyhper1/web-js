import './Home.css';
import { Button } from 'react-bootstrap';
import { SiRobotframework } from "react-icons/si";

function Home() {
  return (
    <div >
      <h1 className='Information'>Welcome To This bot</h1>
      <h2 className='Information2'>Chyper Primary</h2>
      <header className='ButtonPlay'>
      <Button href="https://discord.com/oauth2/authorize?client_id=919444230747873320&scope=bot%20applications.commands&permissions=27648860222" size="lg"> <SiRobotframework /> Invite Now!</Button>
      </header>
    </div>
  )
}

export default Home
