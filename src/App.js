import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Home from './Page/Home/Home';
import Navbar from './Page/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
