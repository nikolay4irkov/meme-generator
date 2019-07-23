import React from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator'
import Style from './style.css'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      
    }
  }

  

  render(){
    return(
      <div>
        <Header />
        <MemeGenerator />
      </div>
    )
  }
}

export default App