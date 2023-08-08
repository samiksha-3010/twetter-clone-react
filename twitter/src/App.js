import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import AllProduct from './Component/Context/AllProduct';



function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
         <Route exact path ='/'element={<Home/>}/>
         <Route exact path ='/register'element={<Register/>}/>
         <Route exact path='login'element={<Login/>}/>
         <Route exact path= 'add-product'element={<AddProduct/>}/>
         <Route exact path= 'all-product'element={<AllProduct/>}/>
     


       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
