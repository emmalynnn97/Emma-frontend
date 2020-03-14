import React, { Component } from 'react'

export class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             grayscale:this.props.grayscale
        }
    }
    
    render() {
        const linkStyle={
            marginRight:'1rem',
            marginLeft:'1rem'
        }
        const colStyle={
            backgroundColor:'#A3A3BB',
            height:'40vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            color:'white',
            boxShadow:'2px 2px 5px black'
          }
        return (
            <>
            <div style={{
                display:'flex',
                height:'10vh',
                justifyContent:'center',
                alignItems:'center',
                color:'white',
                position:'absolute',
                zIndex:'11',
                width:'100vw',
            }}><a style={linkStyle}>Home</a><a style={linkStyle}>About</a><a style={linkStyle}>Contact</a></div>
            <div onMouseEnter={()=>{
                this.setState({
                    grayscale:'0%'
                })
            }}
            onMouseLeave={()=>{
                this.setState({
                    grayscale:this.props.grayscale
                })
            }}
             style={{
                backgroundImage:'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/03/mountains-4356017_1920.jpg")',
                backgroundPosition:'center',
                backgroundSize:'cover',
                height:'75vh',
                filter:`grayscale(${this.state.grayscale})`,
                transition:'.35s ease-in',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
                color:'white',
              }} className='row'>
                  <h1>Hi! I am a simple home page!</h1>
              </div>
              <div style={{
                margin:'-10vh 0vw 0 0vw',
                zIndex:'10',
                width:'100vw'
              }} className='row'>
                <div style={colStyle} className='col-lg-4 col-md-4 col-sm-12'>
                  <h2>Heading 1</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie nunc non blandit.</p>
                  <a style={{
                      color:'white',
                      padding:'10px 40px',
                      border:'2px solid white',
                      textDecoration:'none'
                  }} href='#'>Button</a>                
                </div>
                <div style={colStyle} className='col-lg-4 col-md-4 col-sm-12'>
                <h2>Heading 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie nunc non blandit.</p>
                <a style={{
                      color:'white',
                      padding:'10px 40px',
                      border:'2px solid white',
                      textDecoration:'none'
                  }} href='#'>Button</a>
                </div>
                <div style={colStyle} className='col-lg-4 col-md-4 col-sm-12'>
                <h2>Heading 3</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh tellus molestie nunc non blandit.
                </p>
                <a style={{
                      color:'white',
                      padding:'10px 40px',
                      border:'2px solid white',
                      textDecoration:'none'
                  }} href='#'>Button</a>
                </div>
              </div>
              <div className='row' style={{
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center',
                  color:'white',
                  height:'30vh',
                  backgroundImage:'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/03/americana-1512910_1280-1.png")',
                  backgroundPosition:'center',
                  backgroundSize:'cover',
                  borderTop:'1px solid white',
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
