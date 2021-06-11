import React from "react";

import AppCard from "./AppCard";

export default function Posts(props) {
  console.log("los props", props.data);

  const buildLi = ([key, { title, description }]) => {
    console.log(key);
    return (
      <li key={key}>
        <AppCard>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </AppCard>
      </li>
    );
  };
  return (
    <ul className="d-flex flex-column">{props.data.reverse().map(buildLi)}</ul>
  );
}
/*
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
}*/
