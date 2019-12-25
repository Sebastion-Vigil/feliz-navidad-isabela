import React from 'react'

import '../css/CardFront.css'
import '../css/CardBase.css'

class CardFront extends React.Component {
  render () {
    return (
      <div className='card-front base'>
        <div className='flip-button-front' onClick={this.props.buttonClick}></div>
      </div>
    )
  }
}

export default CardFront
