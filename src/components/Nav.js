
export default function Nav(props) {
  const goToDiv = (div) => {
    let projects = document.getElementById(div)
    projects.scrollIntoView({ behavior: 'smooth' })
  }
  return(
    <nav>
      <ul>
        <li><a onClick={() => goToDiv('homeLink')} href="#home">Home</a></li>
        <li><a onClick={() => goToDiv('projectsLink')} href="#projects">Projects</a></li>
        <li><a onClick={() => goToDiv('contactLink')} href="#contact">Contact</a></li>
        <li><button>Get Free Quote</button></li>
      </ul>
    </nav>
  )
} 