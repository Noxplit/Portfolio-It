import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./components/sections/main/Main";
import {Skills} from "./components/sections/skills/Skills";
import {Works} from "./components/sections/works/Works";
import {Testimony} from "./components/sections/testimony/Testimony";
import {Contact} from "./components/sections/contact/Contact";
import {Slogan} from "./components/sections/slogan/Slogan";
import {Footer} from "./components/sections/footer/Footer";



function App() {
    return (
        <div className="App">
          <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

