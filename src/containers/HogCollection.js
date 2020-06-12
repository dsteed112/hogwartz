import React from "react"

import HogCard from "../components/HogCard.js";

function HogCollection(props) {
    //ur code here
    const displayHogCards = props.hogCollection.map(hog => {
        return <HogCard hog={hog} action={props.action} removeHog={props.removeHog}/>
    })

        return (
            <div className="ui four column grid">
                <div className="row">
                    {displayHogCards}
                    Collection of all hogs
                </div>
            </div>
        )
}

export default HogCollection
