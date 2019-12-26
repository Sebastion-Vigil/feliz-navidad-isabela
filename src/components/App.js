import React from 'react'

// components
import SkyView from './SkyView.js'
import FlipCard from './FlipCard.js'

// css
import '../css/App.css'

class App extends React.Component {
  render () {
    return (
      <div className='app-wrapper'>
        <div className='main-greet'>Feliz Navidad Isabela</div>
        <div className='main-greet'>Te Quiero Mucho</div>
        <div className='main-greet'>Hoy Y Siempre</div>
        <div className='app'>
          <SkyView backgroundColor={'#7328a8'} size={'75px'} how={50} />
          {/* pass frontStyle and backStyle props */}
          <FlipCard />
        </div>
      </div>
    )
  }
}

export default App
