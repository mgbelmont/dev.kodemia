import React from 'react'
import './appCard.css'

class AppCard extends React.Component{
    constructor(props){
        super(props)

        this.props = props
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default AppCard