import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             primaryColor: this.props.primaryColor,
             secondaryColor: this.props.secondaryColor,
             link: this.props.link,
             btnText: this.props.btnText
        }
    }
    
    render() {
        //Style properties for the button
        const btnStyle={
            border:`2px solid ${this.state.primaryColor}`,
            color:this.state.primaryColor,
            backgroundColor:this.state.secondaryColor,
            padding:'10px 15px',
            textDecoration:'none',
            margin:'0 0',
            fontSize:'20px',
            fontWeight:'700',
            transition:'.35s linear',
            fontFamily: 'Arvo'
        }
        return (
            //Invert colors on mouse enter
            <a onMouseEnter={()=>{
                this.setState({
                    primaryColor:this.props.secondaryColor,
                    secondaryColor: this.props.primaryColor
                })
            }} 
            //Invert colors on mouse leave
            onMouseLeave={()=>{
                this.setState({
                    primaryColor:this.props.primaryColor,
                    secondaryColor: this.props.secondaryColor
                })
            }} 
            href={this.state.link} style={btnStyle}>
                {this.state.btnText}
            </a>
        )
    }
}

export default Button
