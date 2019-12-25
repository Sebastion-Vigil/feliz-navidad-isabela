import React from 'react'

import '../css/CardBack.css'
import '../css/CardBase.css'

class CardBack extends React.Component {
  render () {
    return (
      <div className='card-back base'>
        <div className='flip-button' onClick={this.props.buttonClick}></div>
      </div>
    )
  }
}

export default CardBack
