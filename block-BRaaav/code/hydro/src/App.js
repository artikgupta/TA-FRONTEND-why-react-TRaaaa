import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Work from "./Components/Work"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

import "./assets/stylesheet/style.css" 
// import "./assets/media/" 

function App(){
    return(<>
        <Header/>
        <Hero/>
        <About/>
        <Blog/>
        <Work/>
        <Contact/>
        <Footer/>
    </>)
}

export default App