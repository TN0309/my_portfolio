import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './Components/Header/Header';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Skills from './pages/Skills/Skills';
import NavBar from './Components/NavBar/NavBar';




function App() {

 const location = useLocation();
 console.log(location);



  return (
    <div className='App'>
              
   

      <NavBar></NavBar>
      
      <div className='App_main-page-content'>
       
         <Routes>
       <Route element={<Header></Header>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/skills' element={<Skills/>}/>
         
      </Routes>  
    
         </div>
     
    </div>
  );
}

export default App;
