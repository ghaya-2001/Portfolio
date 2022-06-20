import Navbar from "./Components/NavBar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Card from "./Components/Card/Card";
import Languages from "./Components/Languages/Languages"
import './App.css'
import Intership from './Components/Intership/Intership'
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import {useContext} from 'react';
function App() {
  
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
          background: darkMode? 'black': '',
          color: darkMode? 'white': '',
  }}  
    >
      <themeContext.Provider></themeContext.Provider>
      <Navbar/>
      <Intro/>
      <Services/>
      <Languages/>
      <Intership/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
