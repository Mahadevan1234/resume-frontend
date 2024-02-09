import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Viewresume from './components/Viewresume';
import Addresume from './components/Addresume';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<Addresume/>}/>
        <Route path='/viewall' element={<Viewresume/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
