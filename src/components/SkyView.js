import React from 'react'
import Sky from 'react-sky'

// images
import bauble from '../images/bauble.svg'
import gift from '../images/gift.svg'
import hohoho from '../images/hohoho.svg'
import reindeer from '../images/reindeer.svg'
import santaClause from '../images/santa-claus.svg'
import santaTravelling from '../images/santa-travelling.svg'

class SkyView extends React.Component {
    render() {
        return (
            <Sky
          images={{
            0: bauble,
            1: gift,
            2: hohoho,
            3: reindeer,
            4: santaClause,
            5: santaTravelling
          }}
          how={this.props.how}
          time={20}
          size={this.props.size}
          background={this.props.backgroundColor}
        />
        )
    }
}

export default SkyView;