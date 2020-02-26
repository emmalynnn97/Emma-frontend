import React, { Component } from 'react'
import Tile from './Tile.js'
class FrontEndPortfolio extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const endPoints = {
            e1: 'https://emma-api-deploy.herokuapp.com/projects/5e426d8b33b86834e7df90c2',
            e2: 'https://emma-api-deploy.herokuapp.com/projects/5e426eb333b86834e7df90c3',
            e3: 'https://emma-api-deploy.herokuapp.com/projects/5e426f4833b86834e7df90c4',
            e4: 'https://emma-api-deploy.herokuapp.com/projects/5e426fb433b86834e7df90c5',
            e5: 'https://emma-api-deploy.herokuapp.com/projects/5e42705233b86834e7df90c6',
            e6: 'https://emma-api-deploy.herokuapp.com/projects/5e4270a433b86834e7df90c7',
            e7: 'https://emma-api-deploy.herokuapp.com/projects/5e42711733b86834e7df90c8',
            e8: 'https://emma-api-deploy.herokuapp.com/projects/5e4271b233b86834e7df90ca',
            e9: 'https://emma-api-deploy.herokuapp.com/projects/5e42715633b86834e7df90c9'
        }
        const topColStyle={
            height:'62vh',
            boxShadow:'2px 2px 5px black',
            backgroundPosition:'center',
            backgroundSize:'cover',
        }
        const colStyle={
            height:'62vh',
            boxShadow:'2px 2px 5px black',
            backgroundPosition:'center',
            backgroundSize:'cover',
        }
        const containerStyle={
            maxWidth:'95vw',
            height:'200vh',
        }
        return (
            
            <div style={containerStyle} className='container'>
                <div className='row'>
                <Tile sm='12' md='12' lg='12' style={topColStyle} endpoint={endPoints.e3}/>
                </div>
                <div className='row'>
                    <Tile sm='12' md='12' lg='6' style={topColStyle} endpoint={endPoints.e1}/>
                    <Tile sm='12' md='12' lg='6' style={topColStyle} endpoint={endPoints.e2}/>
                    
                </div>
                <div className='row'>
                    {/*>*/}
                    <Tile sm='12' md='12' lg='8' style={colStyle} endpoint={endPoints.e4}/>
                    <Tile sm='12' md='12' lg='4' style={colStyle} endpoint={endPoints.e6}/>
                </div>
                <div className='row'>
                <Tile sm='12' md='12' lg='12' style={colStyle} endpoint={endPoints.e5}/>
                    
                </div>
                <div className='row'>
                    <Tile sm='12' md='12' lg='6' style={colStyle} endpoint={endPoints.e7}/>
                   
                    <Tile sm='12' md='12' lg='6' style={colStyle} endpoint={endPoints.e9}/>
                </div>
                <div className='row'>
                <Tile sm='12' md='12' lg='12' style={colStyle} endpoint={endPoints.e8}/>
                </div>
            </div>
        )
    }
}

export default FrontEndPortfolio
