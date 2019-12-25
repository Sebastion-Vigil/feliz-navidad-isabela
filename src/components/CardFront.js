import React from 'react'

import SkyView from './SkyView.js'

import '../css/CardFront.css'
import '../css/CardBase.css'

class CardFront extends React.Component {
  render () {
    return (
      <div className='card-front base'>
        <SkyView backgroundColor={'magenta'} size={'25px'} how={250} />
        <div
          style={this.props.extraStyle}
          className='flip-button-front'
          onClick={this.props.buttonClick}
        ></div>
      </div>
    )
  }
}

export default CardFront
