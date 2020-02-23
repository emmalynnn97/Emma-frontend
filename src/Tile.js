import React, { Component } from 'react'

class Tile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            endpoint: this.props.endpoint,
            style: this.props.style,
            sm: this.props.sm,
            md: this.props.md,
            lg: this.props.lg,
            bgImage:'',
            content: [],
            opacity: '0'
        }
    }
    componentDidMount() {
        fetch(this.state.endpoint)
            .then(res => res.json())
            .then((data) => {
                this.setState({ content: data, bgImage:data.imageLink })
            })
            .catch(console.log)
    }
    render() {
        const overlayStyle = {
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            height: '100%',
            width: '100%',
            opacity: this.state.opacity,
            transition: '.5s ease',
            backgroundColor: 'black',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")'
        }
        const textStyle = {
            backgroundColor: 'black',
            color: 'white',
            fontSize: '24px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            textAlign: 'center'
        }
        const btnStyle={
            border:'2px solid white',
            color:'white',
            backgroundColor:'black',
            fontFamily:'verdana',
            padding:'5px 10px',
            textDecoration:'none',
            margin:'0 2.5px',
            fontSize:'18px',
            fontWeight:'700',
            transition:'.35s linear'
        }
        const bgImage = {
            backgroundImage:`url("${this.state.bgImage}")`
        }
        const grid = `col-sm-${this.state.sm} col-md-${this.state.md} col-lg-${this.state.lg}`
        return (
            <div onMouseEnter={() => {
                this.setState({
                    opacity: '1'
                })
            }} onMouseLeave={() => {
                this.setState({
                    opacity: '0'
                })
            }} style={{...this.state.style,...bgImage}} className={grid}>
                <div style={overlayStyle}>
                    <div style={textStyle}>
                        <h2>{this.state.content.title}</h2>
                        <p>{this.state.content.description}</p>
                        <a  style={btnStyle} href={this.state.content.link}>View</a>
                        <a  style={btnStyle} href='portfolio'>Case Study</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tile
