import React from 'react'

// components
import SkyView from './SkyView.js'
import FlipCard from './FlipCard.js'

// css
import '../css/App.css'

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <SkyView 
          backgroundColor={"indigo"}
          size={"75px"}
          how={50}
        />
        {/* pass frontStyle and backStyle props */}
        <FlipCard backStyle={{
          
        }}/>
        <FlipCard backStyle={{
          
        }}/>
        <FlipCard backStyle={{
          
        }}/>
      </div>
    )
  }
}

export default App
