import React, { Component } from 'react'
import Banner from './Banner'
import FeaturedProjects from './FeaturedProjects.js'
export class HomePage extends Component {
    render() {
        return (
            <>
                <Banner imgUrl='https://wpreact.emmalynnn.com/wp-content/uploads/2020/04/IMG_0036-scaled.jpg' />
                <FeaturedProjects pic1='https://wpreact.emmalynnn.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-05-at-7.07.46-PM.png'/>
            </>
        )
    }
}

export default HomePage
