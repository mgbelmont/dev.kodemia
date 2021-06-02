import React from 'react'

class SideIconElement extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return( 
            
                <li className='btn'>
                    <img src={this.props.src} />
                    <span>{this.props.text}</span>
                </li>
            
        
        )
    }
}

export default SideIconElement