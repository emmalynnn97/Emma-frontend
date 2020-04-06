import React, { Component } from 'react'
import Banner from './Banner'
import FeaturedProjects from './FeaturedProjects.js'
export class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            grayscale: this.props.grayscale
        }
    }

    render() {
        const linkStyle = {
            marginRight: '1rem',
            marginLeft: '1rem'
        }
        return (
            <>
                <div style={{
                    display: 'flex',
                    height: '10vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    position: 'absolute',
                    zIndex: '11',
                    width: '100vw',
                }}><a style={linkStyle}>Home</a><a style={linkStyle}>About</a><a style={linkStyle}>Contact</a></div>
                <Banner imgUrl='https://wpreact.emmalynnn.com/wp-content/uploads/2020/03/mountains-4356017_1920.jpg' />
                <FeaturedProjects pic1='https://wpreact.emmalynnn.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-05-at-7.07.46-PM.png'/>
                <div className='row' style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    height: '30vh',
                    backgroundImage: 'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/03/americana-1512910_1280-1.png")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    borderTop: '1px solid white',
                    padding: '10px 30px',
                    width:'100vw'
                }}>
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </>
        )
    }
}

export default HomePage
