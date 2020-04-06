import React, { Component } from 'react'

export class FeaturedProjects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pic1:this.props.pic1,
             hidePic1:false,
             info1:''
        }
    }
    
    render() {
        const rowStyle={
            zIndex:'10',
            width:'100vw',
            padding:'100px',
            backgroundColor:'#A3A3BC'
        }
        const colStyle={
            backgroundColor:'#7d7d99',
            height:'40vh',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
            alignItems:'center',
            textAlign:'center',
            color:'white',
            border:'8px solid #a3a3bc',
            padding:'0'
            
          }
        return (
            <div style={rowStyle} className='row'>
                <div style={colStyle} className='col-lg-4 col-md-4 col-sm-12'>
                  <div style={{backgroundColor:'white',backgroundImage:`url("${this.state.pic1}")`,backgroundPosition:'center',backgroundSize:'cover',width:'100%',height:'90%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <div style={{display:'flex',flexDirection:'column',color:'black'}}>
                <h2>{this.state.info1}</h2>
                        
                      </div>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-between',width:'90%'}} className='row'>
                      <a href="https://www.mcfaddengavender.com/" style={{textDecorationColor:'white'}}><h2 style={{color:'white',fontSize:'24px',fontFamily:'Serif'}}>McFadden Gavender</h2></a>
                      <h2 onClick={()=>{
                          if(this.state.hidePic1){
                            this.setState({
                                hidePic1:false,
                                pic1:this.props.pic1,
                                info1:''
                            })
                          }
                          else{
                            this.setState({
                                hidePic1:true,
                                pic1:'',
                                info1:'test'
                            })
                          }
                      }} style={{fontSize:'24px',fontFamily:'Serif',cursor:'pointer'}}>More info</h2>
                      </div>  
                </div>
                <div style={colStyle} className='col-lg-4 col-md-4 col-sm-12'>
                  <div style={{backgroundImage:'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-05-at-7.26.33-PM.png")',backgroundPosition:'center',backgroundSize:'cover',width:'100%',height:'90%'}}>
                  </div>
                  <div style={{display:'flex',justifyContent:'space-between',width:'90%'}} className='row'>
                  <a href="https://hesarizona.org/glendale-charter-school/" style={{textDecorationColor:'white'}}><h2 style={{color:'white',fontSize:'24px',fontFamily:'Serif'}}>ACS Refresh</h2></a>
                      <h2 style={{fontSize:'24px',fontFamily:'Serif',cursor:'pointer'}}>More info</h2>
                      </div>  
                </div>
                <div style={colStyle} className='col-lg-4 col-md-4 col-sm-12'>
                  <div style={{backgroundImage:'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-05-at-7.36.53-PM.png")',backgroundPosition:'center',backgroundSize:'cover',width:'100%',height:'90%'}}></div>
                  <div style={{display:'flex',justifyContent:'space-between',width:'90%'}} className='row'>
                  <a href="https://blog.summithut.com/" style={{textDecorationColor:'white'}}><h2 style={{color:'white',fontSize:'24px',fontFamily:'Serif'}}>The Summit Hut Blog</h2></a>
                      <h2 style={{fontSize:'24px',fontFamily:'Serif',cursor:'pointer'}}>More info</h2>
                      </div>  
                </div>
            </div>
        )
    }
}

export default FeaturedProjects
