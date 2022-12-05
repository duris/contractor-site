import Nav from "./Nav";
import '../styles/header.css'

export default function Header(props) {
  return(
    <header className="app-header">      
      <div className="header-wrap">      
        <span className="logo">Brocks Usrsem</span>
        <Nav/>
      </div>
      <span className="header-bg"></span>
    </header>
  )
} 