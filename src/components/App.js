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
        <SkyView />
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </div>
    )
  }
}

export default App
