import './App.css';

//component
import Nav from './pages/Nav'

//react router
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
