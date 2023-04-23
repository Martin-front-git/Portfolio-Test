import Header from "./Components/Header/Header"
import {Routes ,Route} from 'react-router-dom';
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Skills from "./Components/Pages/Skills/skills";
import Contacts from "./Components/Pages/Contacts/Contacts";

function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </>
  )
}

export default App
