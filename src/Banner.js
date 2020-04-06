import React, { Component } from 'react'

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
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            height: '65vh',
            filter: `grayscale(${this.state.grayscale})`,
            transition: '.35s ease-in',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'white',
            flexWrap: 'wrap'
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
                    <h1 style={{fontSize:'60px',fontFamily:'Serif'}}>Hi, I'm Emma</h1><br/>
                  <h1 style={{fontSize:'60px',fontFamily:'Serif'}}>I develop things for the web</h1>
            </div>
        )
    }
}

export default Banner
