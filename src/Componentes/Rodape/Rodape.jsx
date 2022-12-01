import React from 'react'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import { Footer } from './rodapeStyled'

const Rodape = () => {
  return (
    <Footer>
      <div>
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
      </div>
      <p>Desenvolvido por Alura</p>
    </Footer>
  )
}

export default Rodape
