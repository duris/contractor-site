import icon from '../images/logo.png'

export default function Banner(props) {

  function goToQuote(params) {
    
  }

  return(
    <>
    <div className="banner" id="homeLink">
     <div className="leftpanel">      
      <div className='logo'>
        {/* <img src={icon}/> */}
        </div>
      <h2>Call today for a free consultation</h2>
      <h2>(330) 635-1825</h2>
     </div>
     <div className="rightpanel">
      <h1>The Handyman</h1>
      <h2> Services & Contracting</h2>
      <p>Services and Repairs + Carpentry; Contracting; Masonry; Electrical</p>
      <span>Call Today (330) 635-1825</span>
     </div>
    </div>
  </>
  )
} 