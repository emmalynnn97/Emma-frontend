import './App.css';
import React, { Component } from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: this.props.description,
            color:this.props.color,
            image:this.props.image
        }
    }

    render() {
        //Style properties for the outside container
        const containerStyle = {
            backgroundColor:this.state.color,
            backgroundImage:`url(${this.state.image})`,
            height: '15vh',
            boxShadow: '3px 3px 5px gray',
            borderRadius: '2px',
            display:'flex',
            alignItems:'center',
            flexWrap:'wrap',
            justifyContent:'center',
            flexDirection:'row',
            paddingTop:'.5%'
        }
        //Style properties for the footer text
        const headerStyle = {
            color: 'black',
            display:'flex',
            fontWeight:'700',
            letterSpacing:'1.25px'
        }
        //Style properties for the footer icons
        const iconStyle = {
            height: '50px',
            width: '50px',
            color: 'black',
            display:'flex',
            marginLeft:'25px',
        }
        return (
            <div style={containerStyle} className='footer container-fluid'>
                <h2 style={headerStyle}>{this.state.description}</h2>
                <a href='https://github.com/emmalynnn97'><FaGithub style={iconStyle}></FaGithub></a>
                <a href='https://www.linkedin.com/in/emma-guy-639014189/'><FaLinkedin style={iconStyle}></FaLinkedin></a>
            </div>
        )
    }
}

export default Footer