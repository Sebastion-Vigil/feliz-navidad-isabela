import React from 'react'
import ReactCardFlip from 'react-card-flip'

// components
import CardFront from './CardFront.js'
import CardBack from './CardBack.js'

// css
import '../css/App.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
  }

  render () {
    return (
      <div className='app'>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection='horizontal'
        >
          <CardFront buttonClick={this.handleClick} />
          <CardBack buttonClick={this.handleClick} />
        </ReactCardFlip>
      </div>
    )
  }
}

export default App
