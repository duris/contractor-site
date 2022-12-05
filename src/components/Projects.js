import project1 from '../images/one.png'
import project2 from '../images/two.png'

export default function Projects(props) {

  return(
    <div className="projects" id="projectsLink">
      <h1>Projects</h1> 
      <section>            
        <article>
          <div className="beforeAfter">
            <div className="before">
              <span>Before</span>
              <img src={project1} width="100%" height="100%"/>
            </div>
            <div className="after">
              <span>After</span>

              <img src={project2} width="100%" height="100%"/>
            </div>
          </div>
          <h2>Door Framing</h2>          
        </article>
        <article>
          <h2>Proj1</h2>
          <p>project desc</p>
        </article>
        <article>
          <h2>Proj1</h2>
          <p>project desc</p>
        </article>
        <article>
          <h2>Proj1</h2>
          <p>project desc</p>
        </article>      
      </section>
    </div>
  )
} 