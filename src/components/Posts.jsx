import React from "react";

import { useHistory } from "react-router";

import AppCard from "./AppCard";

export default function Posts(props) {
  const history = useHistory();

  const buildLi = ([key, { title, description }]) => {
    return (
      <li key={key}>
        <AppCard>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            onClick={() => history.push(`/posts/${key}`)}
            className="btn btn-primary"
          >
            Detail
          </button>
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
