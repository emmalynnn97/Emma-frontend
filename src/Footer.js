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
            borderRadius: '2px',
            display:'flex',
            alignItems:'center',
            flexWrap:'wrap',
            justifyContent:'center',
            flexDirection:'row',
            bottom:'0',
            right:'0',
            left:'0',
            width:'100vw'
        }
        //Style properties for the footer text
        const headerStyle = {
            color: 'white',
            display:'flex',
            fontWeight:'700',
            letterSpacing:'1.25px',
            fontFamily: 'Arvo'
        }
        //Style properties for the footer icons
        const iconStyle = {
            height: '50px',
            width: '50px',
            color: 'white',
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