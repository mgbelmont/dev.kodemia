import React, { useState, useEffect } from "react";

//import styles from './appThemeToggle.module.css'
import "./appThemeToggle.css";

// class AppThemeToggle extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { theme: "light" };
//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     const theme = this.state.theme === "light" ? "dark" : "light";

//     this.setState({ theme });
//   }

//   render() {
//     return (
//       <div
//         className={`appThemeToggle d-flex align-items-center justify-content-center ${this.state.theme}`}
//         onClick={this.toggle}
//       ></div>
//     );
//   }
//   //lifecycle
//   componentDidMount() {
//     console.log(this.state.theme);
//     document.body.setAttribute("theme", this.state.theme);
//   }

//   componentDidUpdate() {
//     console.log(this.state.theme);
//     document.body.setAttribute("theme", this.state.theme);
//   }
// }

function AppThemeToggle() {
  const [theme1, setTheme] = useState("light");

  //cuando se monta
  useEffect(() => {
    document.body.setAttribute("theme", theme1);
  }, []);

  //cuando se actualiza
  useEffect(() => {
    document.body.setAttribute("theme", theme1);
  }, [theme1]);

  const toggle = () => {
    const theme = theme1 === "light" ? "dark" : "light";

    setTheme(theme);
  };

  return (
    <div
      className={`appThemeToggle d-flex align-items-center justify-content-center ${theme1}`}
      onClick={toggle}
    ></div>
  );
}

/*
    componentWillMount(){
        const now = new Date()
        console.log('Antes de que esté en el DOM', now.getTime())
    }
   //este tmb se usa
    componentDidMount(){
        const now = new Date()
        console.log('Ya estoy en el DOM', now.getTime())
    }

    
    componentWillUpdate(){
        const now = new Date()
        console.log('Antes de que me actualice', now.getTime())
    }

    //este se usa
    componentDidUpdate(){
        const now = new Date()
        console.log('Cuando ya me actualicé', now.getTime())
    }

    componentWillUnmount(){
        const now = new Date()
        console.log('Antes de que me quite del DOM', now.getTime())
    }
    */

export default AppThemeToggle;
