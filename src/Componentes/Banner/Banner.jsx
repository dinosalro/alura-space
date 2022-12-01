import React from 'react'
import banner from '../assets/banner.png'
import { BoxBanner } from './bannerStyled'

const Banner = () => {
  return (
    <BoxBanner>
    <img src={banner} alt="Banner" />
    <div>
      <h1>A galeria mais completa do espaço</h1>
    </div>
    </BoxBanner>
  )
}

export default Banner
