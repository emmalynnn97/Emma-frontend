import React, { Component } from 'react'

export class Project extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            img:this.props.img,
            name:this.props.name,
            offset:this.props.offset
        }
    }
    /*raiseOnScroll(){
        const scrollDistance = document.body.scrollTop || document.documentElement.scrollTop;
        var columns = document.querySelectorAll('.projectCol')
        if(scrollDistance > 250){
            columns.forEach((column)=>{
                column.style.transform='translateY(-30px)'
            })
        }
        else{

        }
    }
    componentDidMount(){
        window.addEventListener("scroll", this.raiseOnScroll)
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.raiseOnScroll)
    }*/
    render() {
        const colStyle={
            height:'40vh',
            backgroundColor:'white',
            width:'30vw !important',
            transition:'.35s ease-in',
            padding:'30px',
            backgroundColor:'transparent'
        }
        const imgStyle={
            backgroundImage:`url("${this.state.img}")`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'75%'
        }
        const copyStyle={
            display:'flex',
            flexDirection:'column',
            color:'white',
            border:'2px solid white',
            padding:'20px',
        }
        return (
            <div style={colStyle} className='projectCol col col-lg-4 col-md-12 col-sm-12'>
                
                <div className='row' style={imgStyle}></div>
                <div className='row' style={copyStyle}>
                    <h3>
                        {this.state.name}
                        </h3>
                        <ul><li>a</li><li>b</li></ul>    
                </div>    
                </div>
        )
    }
}

export default Project
