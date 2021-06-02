import React from 'react'
import AppCard from './AppCard'

class Posts extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return( 
            
                <div>
                    <AppCard>
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Content card</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </AppCard>
                    <AppCard>
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Content card</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </AppCard>
                    <AppCard>
                        <h5 class="card-title">Card Title</h5>
                        <p class="card-text">Content card</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </AppCard>
                    
                </div>
            
        
        )
    }
}

export default Posts