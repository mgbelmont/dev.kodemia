import React from 'react'

import Header from './components/Header'
import SideLeft from './components/SideLeft';
import Posts from './components/Posts';
import AppLoading from './components/AppLoading';
<from></from>
class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <div className='container'>
          <div className='row'>
          <SideLeft />
        
          <main className='col-8'>
            <Posts />
          </main>

          </div>
        
        </div>
        <AppLoading />
        
      </div>
     
    )
  }
}

export default App;
