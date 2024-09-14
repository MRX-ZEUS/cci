import {Routes , Route} from 'react-router-dom';
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Stories from './Stories.jsx'
import Contact from './Contact.jsx'
function App(){
  return(
    <div className="bg-blue-950">
    <Header />
    <Hero />
    <About />
    <Stories />
    <Contact />
    </div>
  )
}

export default App;