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
      <h2>(555)555-5555</h2>
     </div>
     <div className="rightpanel">
      <h1>Best Solver at Most Problems</h1>
      <p>I can help fix sink and stink</p>
      <button>Get Free Quote</button>
     </div>
    </div>
  </>
  )
} 