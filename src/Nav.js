import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            endpoint: this.props.endpoint,
            image: this.props.image,
            color: this.props.color
        }
    }
    //When the component loads, listen for a scroll in change the nav
    //Load in the menu items from my API
    componentDidMount() {
        window.addEventListener("scroll", (this.shrinkNavOnScroll));
        fetch(this.state.endpoint)
            .then(res => res.json())
            .then((data) => {
                this.setState({ data: data })
            })
            .catch(console.log)
    }
    //Remove the scroll event listener
    componentWillUnmount() {
        window.removeEventListener("scroll", (this.shrinkNavOnScroll));
    }
    //Check how far down the user has scrolled, when 50px is passed change the navbar
    shrinkNavOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            headerEl = document.getElementById("js-header");
        headerEl.style.transition = '.5s'
        if (distanceY > shrinkOn) {
            headerEl.style.opacity = '.4'
        } else {
            headerEl.style.opacity = '1'
        }
    }
    render() {
        //Style properties for each link within the navbar
        const navTextStyle = {
            marginLeft:'1.75%',
            marginRight:'1.75%',
            fontWeight: '600',
            color: 'black',
            textDecoration: 'none',
            fontSize: '22px',
            fontFamily: 'Arvo'
        }
        //Style for the navbar itself
        const navStyle = {
            height: '100px',
            position: 'fixed',
            width: '100vw',
            top: '0',
            backgroundImage: "url(" + this.state.image + ")",
            backgroundColor: this.state.color,
            boxShadow: '3px 3px 5px gray',

        }
        //Map each link from the api into the navbar
        let navItems = this.state.data.map((item, index) => {
            return (
                <Link style={navTextStyle} to={item.link}>{item.name}</Link>
            )
        })
        return (
            <nav style={navStyle} id='js-header' className='navbar row justify-content-center sticky-top navbar-expand navbar-dark'>
                {navItems}
            </nav>
        )
    }
}

export default Nav
