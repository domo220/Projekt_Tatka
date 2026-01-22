import "./App.css";

import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Floor_design from "./floor_design/Floor_design";
import Floor_prum from "./floor_prum/Floor_prum";
import Contact from "./contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Floor_design />
      <Floor_prum />
      <Contact />
    </div>
  );
}

export default App;
