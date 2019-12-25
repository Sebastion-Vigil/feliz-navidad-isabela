import React from 'react'
import ReactCardFlip from 'react-card-flip'

// components
import CardFront from './CardFront.js'
import CardBack from './CardBack.js'

// don't think this evens needs a css import

class FlipCard extends React.Component {
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
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection='horizontal'
        >
          <CardFront buttonClick={this.handleClick} />
          <CardBack buttonClick={this.handleClick} />
        </ReactCardFlip>
    )
  }
}

export default FlipCard;
