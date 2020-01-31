import React from 'react'
import './App.css'
import Card from './Components/Card'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }

  render(){
    return (
      <div className='App'>

        <h1 className='Header'>Home</h1>
        <div className='Main'>
          <div className='Card'>
            <Card/>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
