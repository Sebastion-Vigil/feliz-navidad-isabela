import React from 'react'

import '../css/CardFront.css'
import '../css/CardBase.css'

class CardFront extends React.Component {
  render () {
    return (
      <div className='card-front base'>
        <p>Front</p>
        <div className='flip-button' onClick={this.props.buttonClick}>
          Click
        </div>
      </div>
    )
  }
}

export default CardFront
