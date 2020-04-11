import React, { Component } from 'react'
import Project from './Project'
export class FeaturedProjects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pic1:this.props.pic1,
             hidePic1:false,
             info1:''
        }
    }
    
    render() {
        const rowStyle={
            zIndex:'10',
            padding:'100px',
            backgroundColor:'#212529',
        }
        const headerStyle={
            color:'white',
            textAlign:'center'
        }
        return (
            <div className='container-fluid'>
            <div style={rowStyle} className='row'>
                <div style={headerStyle} className='col col-lg-12 col-md-12 col-sm-12'><h2>Featured Projects</h2></div>
                <Project name='McFadden Gavender' img='https://wpreact.emmalynnn.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-05-at-7.07.46-PM.png'/>
                <Project name='ACS Refresh' img='https://wpreact.emmalynnn.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-05-at-7.26.33-PM.png'/>
                <Project name='Summit Hut Blog' img='https://wpreact.emmalynnn.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-05-at-7.36.53-PM.png'/>
            </div>
            </div>
        )
    }
}

export default FeaturedProjects
