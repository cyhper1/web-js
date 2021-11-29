import { Switch, Route } from "react-router-dom";
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Header.jsx';
import Home from './component/Homepage/Home.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App-header">
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
