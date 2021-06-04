import React, { useState, useEffect } from "react";
import "./appLoading.css";

// class AppLoading extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { active: true };
//   }

//   render() {
//     const active = this.state.active ? "active" : "";
//     return (
//       <div
//         className={`loading ${active} align-items-center justify-content-center`}
//       >
//         <div className="spinner-border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ active: false });
//     }, 2000);
//   }
// }

function AppLoading() {
  const [activeState, setActiveState] = useState(true);

  const active = activeState ? "active" : "";

  useEffect(() => {
    setTimeout(() => {
      setActiveState(false);
    }, 2000);
  }, []);

  return (
    <div
      className={`loading ${active} align-items-center justify-content-center`}
    >
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default AppLoading;
