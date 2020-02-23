import React, { Component } from 'react'

class textLeftImageRight extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const colStyle={
            height: '55vh',
            border: '20px solid white',
            padding: '0 !important',
            display: 'table',
            textAlign: 'center',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }
        const vAlign={
            display: 'table-cell',
            verticalAlign: 'middle',
        }
        const textStyle={
            padding:'30px 30px',
            fontSize:'18px'
        }
        return (
            <div style={{marginTop:'-200px'}} className='row'>
                <div style={colStyle} className='col-sm-12 col-md-12 col-lg-6'>
                    <div style={vAlign}>
                        <h1>Header</h1>
                        <p style={textStyle}>Text</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default textLeftImageRight
