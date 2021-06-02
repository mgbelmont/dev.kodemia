import React from 'react'

class AppButton extends React.Component{
    constructor(props){
        super(props)
        this.props = props
        console.log(props)
    }

    render(){
        if(this.props.type === "anchor"){
            return(
                <a className='btn btn-link'>
                    {this.props.text}
                </a>
            )
        }

        return(
            <button className='btn' type='button'>
                {this.props.text}
            </button>
        )
    }
}


export default AppButton