import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            endpoint: this.props.endpoint,
            image: this.props.image,
            color: this.props.color,
        }
    }
    getStyles() {
        return {
            navTextStyle: {
                marginLeft: '1.75%',
                marginRight: '1.75%',
                fontWeight: '500',
                color: 'white',
                textDecoration: 'none',
                fontSize: '22px',
                fontFamily: 'Arvo'
            },
            navStyle: {
                height: '100px',
                position: 'fixed',
                width:'100vw',
                top: '0',
                backgroundColor: this.state.color,
                boxShadow: '3px 3px 5px gray'
            }
        }
    }
    render() {
        const styles = this.getStyles();
        const navTextStyle = styles.navTextStyle;
        const navStyle = styles.navStyle;
        return (
            <nav style={navStyle} id='js-header' className='navbar justify-content-center sticky-top navbar-expand navbar-dark'>
                <Link style={navTextStyle} to={"/"}>Home</Link>
                <Link style={navTextStyle} to={"/about"}>About</Link>
                <Link style={navTextStyle} to={"/portfolio"}>Portfolio</Link>
            </nav>
        )
    }
}

export default Nav
