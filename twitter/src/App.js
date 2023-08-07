import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';



function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
         <Route exact path ='/'element={<Home/>}/>
         <Route exact path ='/register'element={<Register/>}/>
         <Route exact path='login'element={<Login/>}/>
     


       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
