import './App.css'
import Navbar from "./Sections/Navbar";
import Hero from "./Sections/hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

export default function App() {
    return (
        <div>
            <div className="container mx-auto max-w-7xl md:items-start md:justify-start overflow-hidden">
                <Navbar/>
                <Hero/>
                <Projects/>
                <Experience/>
                <About/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}
