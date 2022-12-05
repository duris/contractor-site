import Banner from "./Banner";
import Feature from "./Feature";
import Projects from "./Projects";
import Services from "./Services";

export default function Main() {
  return(
    
    <main>
      <Banner/>      
      <Feature/>
      <Services/>
      <Projects/>      
      <div className="contact" id="contactLink">
        <h1>Contact</h1>
      </div>
    </main>
  
  )
} 