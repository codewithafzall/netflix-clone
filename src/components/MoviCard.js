import React from 'react'
import { IMG_CDN } from '../utils/constant'

const MoviCard = ({poster}) => {
  return (
    <div className='pr-4 w-28 md:w-48' >
      <img alt='poster' src={IMG_CDN + poster}/>
    </div>
  )
}

export default MoviCard