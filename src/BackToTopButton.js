import React, { Component } from 'react'
import { FaArrowUp } from 'react-icons/fa';
class BackToTopButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            iconColor:this.props.iconColor, 
            backToTopColor:this.props.color,
             cursor:''
        }
    }
    
    render() {
        const backToTopStyle={
            height:'75px',
            width:'75px',
            borderRadius:'75px',
            backgroundColor:this.state.backToTopColor,
            position:'fixed',
            bottom:'5vh',
            right:'5vw',
            zIndex:'1',
            color:'white',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            transition:'.35s ease-in',
            cursor:this.state.cursor
        }
        const iconStyle={
            color:this.state.iconColor,
            height:'25px',
            width:'25px',
            transition:'.35s ease-in'
        }
        return (
                <div id='backToTop' onClick={()=>{
                    window.scrollTo(0,0)
                }} onMouseEnter={()=>{
                    this.setState({
                        iconColor:this.props.color,
                        backToTopColor:this.props.iconColor,
                        cursor:'pointer'
                    })
                }} onMouseLeave={()=>{
                    this.setState({
                        iconColor:this.props.iconColor,
                        backToTopColor:this.props.color,
                        cursor:''
                    })
                }} style={backToTopStyle}><FaArrowUp style={iconStyle}></FaArrowUp></div>
        )
    }
}

export default BackToTopButton
