import React, { Component } from 'react'
import HogCollection from "./HogCollection.js";
import YourHogArmy from "./YourHogArmy"

import hogs from '../porkers_data' 
//^not in CC

class HogsPage extends Component {
    //start here with your code for step one
    state = {
        hogCollection: [],
        hogArmy: [],
    }

    componentDidMount(){
    //     fetch('url')
    //         .then(response => response.json())
    //         .then(data => this.setState({hogCollection: data}))
    // }
    this.setState({ hogCollection: hogs })
    }

    addHogToArmy = (hog) => {
        if (!this.state.hogArmy.find(card => card.id === hog.id))// if you dont find a hog in the army with this id - add the hog
        this.setState({ hogArmy: [...this.state.hogArmy, hog] })//adds a hog to hog army
    }

    removeHogFromArmy = (hog) => {
        let newArmy = this.state.hogArmy.filter(card => card.id !== hog.id)//for each card does it match the hog id? if it does - pass it through filter and create a new array
        this.setState({ hogArmy: newArmy })
    }

    removeHogForever = (hog) => {
        // console.log("removeHogForever")
        let newCollection = this.state.hogCollection.filter(card => card.id !== hog.id)
        this.removeHogFromArmy(hog)
        this.setState({ hogCollection: newCollection })
        
    }

    render() {
        return (
            <div>
                <YourHogArmy hogArmy={this.state.hogArmy} action={this.removeHogFromArmy} removeHogForever={this.removeHogForever}/>
                <HogCollection hogCollection={this.state.hogCollection} action={this.addHogToArmy} removeHog={this.removeHogForever}/>
            </div>
        )
    }
}

export default HogsPage
