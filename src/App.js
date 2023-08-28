import React from "react";
import "./App.css";
import Hero from "./components/Hero/Hero"; // Import the Hero component
import Programs from "./components/Programs";
import Plans from "./components/Plans";
import Reasons from './components/Reasons';
import Testimonials from "./components/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
function App() {
    return ( <div className = "App" >
<Hero />
<Programs/>
<Reasons/>
<Plans/>
<Testimonials/>
<Join/>
<Footer/>
        </div>
    );
}

export default App;