import React, { Component } from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
export class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            grayscale: '50%',
            imgUrl:this.props.imgUrl
        }
    }

    render() {
        const bannerStyle = {
            backgroundImage: `url("${this.state.imgUrl}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            height: '85vh',
            filter: `grayscale(${this.state.grayscale})`,
            transition: '.35s ease-in',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            flexWrap: 'wrap'
        }
        const rowStyle={
            display:'flex',
            justifyContent:'space-between',
            width:'150px'
        }
        const iconStyle={
            width:'50px',
            height:'50px',
            color:'white'
        }
        return (
            <div onMouseEnter={() => {
                this.setState({
                    grayscale: '50%'
                })
            }}
                onMouseLeave={() => {
                    this.setState({
                        grayscale: '0%'
                    })
                }} style={bannerStyle} className='row'>
                    <h1 style={{fontSize:'52px',fontFamily:'Serif',textAlign:'center'}}>Hi, I'm Emma.<br/>I'm a front end developer.</h1>
                    <div style={rowStyle}>
                    <a href='https://github.com/emmalynnn97'><FaGithub style={iconStyle}></FaGithub></a>
                    <a href='https://www.linkedin.com/in/emma-guy-639014189/'><FaLinkedin style={iconStyle}></FaLinkedin></a>
                    </div>
            </div>
        )
    }
}

export default Banner
