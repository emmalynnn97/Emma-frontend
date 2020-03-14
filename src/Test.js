import React, { Component } from 'react'

export class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:[],
             endpoint:this.props.endpoint,
             title:'',
             text:''
        }
    }
    componentDidMount() {
        fetch(this.state.endpoint)
            .then(res => res.json())
            .then((data) => {
                this.setState({ content: data, title:data.object.title, text:data.object.content})
            })
            .catch(console.log)
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
        <p dangerouslySetInnerHTML={{__html:this.state.text}}></p>
            </div>
        )
    }
}

export default Test
