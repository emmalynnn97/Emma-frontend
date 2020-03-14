import React from 'react';
import './App.css';
import Nav from './Nav.js'
import LandingPageTemplate from './LandingPageTemplate.js'
import HomePage from './HomePage.js'
import FrontEndPortfolio from './FrontEndPortfolio.js'
import Footer from './Footer.js'
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
  let homePage=()=>(
    <HomePage grayscale='50%'/>
  )
  const appStyle={
    height:'100vh',
  }
  return (
    <Router>
    <div style={appStyle} className="App">
    {/*<Nav color='white' image='https://www.transparenttextures.com/patterns/asfalt-dark.png' endpoint={menuEndpoint}/>*/}
      <Route exact path='/' component={homePage}></Route>
      {/*<Route path='/contact' component={contactPage}></Route>*/}
      {/*<Route path='/home' component={homePage}></Route>*/}
      {/*<Route path='/portfolio/frontend' component={frontEndPortfolio}></Route>*/}
      {<Footer description='Lynn Co' color='#A3A3BB' image='https://www.transparenttextures.com/patterns/asfalt-dark.png'/>}
    
    </div>
    </Router>
  );
}
export default App;
