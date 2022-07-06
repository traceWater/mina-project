import './App.css';

//component
import Footer from "./pages/Footer/Footer";
import Nav from './pages/Nav/Nav'

//react router
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
