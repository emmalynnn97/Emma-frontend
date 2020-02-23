import React, { Component } from 'react'
import Button from './Button.js'
import LandingPageTheme from './LandingPageTheme.js'
import BackToTopButton from './BackToTopButton.js'

class LandingPageTemplate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            endpoint: this.props.endpoint,
            pageTitle: '',
            pic1:'',
            pic2:'',
            pic3: '',
            pic4: '',
            aboutText: '',
            frontEndText:'',
            shopifyText:'',
            wpText:'',
            content: [],
            iconColor:'white',
            backToTopColor:'black',
            cursor:''
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", (this.showBtn));
        fetch(this.state.endpoint)
            .then(res => res.json())
            .then((data) => {
                this.setState({ content: data, aboutText:data.content.aboutText, frontEndText:data.content.frontEndText, shopifyText:data.content.shopifyText,wpText:data.content.wpText,pic1:data.images.img1,pic2:data.images.img2,pic3:data.images.img3,pic4:data.images.img4,pageTitle:data.title })
            })
            .catch(console.log)
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", (this.showBtn));
    }
    showBtn(){
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 50,
          btn = document.getElementById("backToTop");
          if (distanceY > shrinkOn) {
            btn.style.display = 'flex'
          } else {
            btn.style.display = 'none'
          }
      }
    render() {
        const landingPageTheme = new LandingPageTheme();
        const colStyle = landingPageTheme.colStyle;
        const headerStyle = landingPageTheme.headerStyle
        const containerStyle = landingPageTheme.containerStyle;
        const vAlign = landingPageTheme.vAlign;
        const text = landingPageTheme.text;
        const headerText = landingPageTheme.headerText;
        
        
        let imgColStyle1 = { ...colStyle, ...{backgroundImage:`url("${this.state.pic1}")`} }
        let imgColStyle2 = { ...colStyle, ...{backgroundImage:`url("${this.state.pic2}")`} }
        let imgColStyle3 = { ...colStyle, ...{backgroundImage:`url("${this.state.pic3}")`}}
        let imgColStyle4 = { ...colStyle, ...{backgroundImage:`url("${this.state.pic4}")`} }
        const collapsableCol='col-sm-12 col-md-12 col-lg-6'
        return (
            <div style={containerStyle} className='container'>
               
               <BackToTopButton iconColor='white' color='black'/>
               
                <div className='row'>
                    <div style={headerStyle} className='col'>
                        <div style={vAlign}>
                <h1 style={headerText}>{this.state.pageTitle}</h1>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div style={colStyle} className={collapsableCol}>
                        <div style={vAlign}>
                            <h1 style={headerText}>About Me</h1>
                            <p style={text}>{this.state.aboutText}</p>
                            <Button primaryColor={landingPageTheme.btnPrimaryColor} secondaryColor={landingPageTheme.btnSecondaryColor} btnText='Hire Me' link='#' />
                        </div>
                    </div>
                    <div style={imgColStyle1} className={collapsableCol}>
                        <div style={vAlign}>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div style={imgColStyle2} className={collapsableCol}>
                        <div style={vAlign}>
                        </div>
                    </div>
                    <div style={colStyle} className={collapsableCol}>
                        <div style={vAlign}>
                            <h1 style={headerText}>Front End Development</h1>
                            <p style={text}>{this.state.frontEndText}</p>
                            <Button primaryColor={landingPageTheme.btnPrimaryColor} secondaryColor={landingPageTheme.btnSecondaryColor} btnText='View Portfolio' link='/portfolio/frontend' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div style={colStyle} className={collapsableCol}>
                        <div style={vAlign}>
                            <h1 style={headerText}>Custom Shopify Stores</h1>
                            <p style={text}>{this.state.shopifyText}</p>
                            <Button primaryColor={landingPageTheme.btnPrimaryColor} secondaryColor={landingPageTheme.btnSecondaryColor} btnText='View Portfolio' link='/portfolio/frontend'  />
                        </div>
                    </div>
                    <div style={imgColStyle3} className={collapsableCol}>
                        <div style={vAlign}></div>
                    </div>
                </div>
                <div className='row'>
                    <div style={imgColStyle4} className={collapsableCol}>
                        <div style={vAlign}>

                        </div>
                    </div>
                    <div style={colStyle} className={collapsableCol}>
                        <div style={vAlign}>
                            <h1 style={headerText}>Custom WordPress Frameworks</h1>
                            <p style={text}>{this.state.wpText}</p>
                            <Button primaryColor={landingPageTheme.btnPrimaryColor} secondaryColor={landingPageTheme.btnSecondaryColor} btnText='View Themes' link='#' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPageTemplate
