import React, { Component } from 'react'

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
        const colStyle={
            height:'40vh',
            backgroundColor:'white',
            border:'2px solid black',
            width:'30vw !important',
        }
        return (
            <div style={rowStyle} className='row'>
                <div className='col col-lg-4 col-md-4 col-sm-12' style={colStyle}>a</div>
                <div className='col col-lg-4 col-md-4 col-sm-12' style={colStyle}>b</div>
                <div className='col col-lg-4 col-md-4 col-sm-12' style={colStyle}>c</div>
            </div>
        )
    }
}

export default FeaturedProjects
