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
            5: santaClause,
            6: santaTravelling
          }}
          how={50}
          time={20}
          size={"75px"}
          background={"indigo"}
        />
        )
    }
}

export default SkyView;