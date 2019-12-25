import React from 'react'

import '../css/CardBack.css'
import '../css/CardBase.css'

class CardBack extends React.Component {
  render () {
    return (
      <div className='card-back base' style={this.props.imgStyle}>
        <div
          className='flip-button-back'
          style={this.props.extraStyle}
          onClick={this.props.buttonClick}
        ></div>
      </div>
    )
  }
}

export default CardBack
