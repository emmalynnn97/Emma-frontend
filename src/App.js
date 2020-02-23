import React from 'react';
import './App.css';
import Nav from './Nav.js'
import LandingPageTemplate from './LandingPageTemplate.js'
import FrontEndPortfolio from './FrontEndPortfolio.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './Footer.js'
function App() {
  const landingEndPoint='https://emma-api-deploy.herokuapp.com/pages/5e4286185d22753b68a924a5'
  const menuEndpoint='https://emma-api-deploy.herokuapp.com/menus'

  let landingPage=()=>(
    <>
  <LandingPageTemplate endpoint={landingEndPoint}/>
  </>
  )
  let contactPage=()=>(
    <>

    </>
  )
  let frontEndPortfolio=()=>(
    <>
      <FrontEndPortfolio/>
    </>
  )
  const appStyle={
    height:'200vh',
  }
  return (
    <Router>
    <div style={appStyle} className="App">
    <Nav color='white' image='https://www.transparenttextures.com/patterns/asfalt-dark.png' endpoint={menuEndpoint}/>
      <Route exact path='/' component={landingPage}></Route>
      <Route path='/contact' component={contactPage}></Route>
      <Route path='/portfolio/frontend' component={frontEndPortfolio}></Route>
      {<Footer description='Lynn Co' color='white' image='https://www.transparenttextures.com/patterns/asfalt-dark.png'/>}
    
    </div>
    </Router>
  );
}
export default App;
