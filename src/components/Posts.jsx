import React from "react";
import AppCard from "./AppCard";

const postObject = {
  post1: [
    {
      title: "Card Title 1",
      text: "lorem loremo lorem loremo lorem loremo lorem loremo",
    },
  ],
  post2: [
    {
      title: "Card Title 2",
      text: "lorem loremo lorem loremo lorem loremo lorem loremo",
    },
  ],
  post3: [
    {
      title: "Card Title 3",
      text: "lorem loremo lorem loremo lorem loremo lorem loremo",
    },
  ],
};

export default function Posts(props) {
  const buildLi = ({ title, text }, index) => {
    return (
      <li>
        <AppCard>
          <h5 class="card-title">title</h5>
          <p class="card-text">text</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </AppCard>
      </li>
    );
  };
  return <ul>{Object.entries(postObject).map(buildLi)}</ul>;
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
