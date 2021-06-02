import React from 'react';
import SideIconElement from './SideIconElement'

class SideLeft extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return(
            <div className='col-2'>
                <ul className=''>
                    <SideIconElement text="Home" src='🏡' />
                    <SideIconElement text="Reading List" src='📚' />
                    <SideIconElement text="Listings" src='📰' />
                    <SideIconElement text="Podcasts" src='🎤' />
                    <SideIconElement text="Videos" src='📽' />
                    <SideIconElement text="Tags" src='📝' />
                </ul>
            </div>
            
        )
    }
}

export default SideLeft