import React from 'react'
import home from '../assets/icones/home-ativo.png'
import curtidas from '../assets/icones/mais-curtidas-inativo.png'
import vistas from '../assets/icones/mais-vistas-inativo.png'
import novas from '../assets/icones/novas-inativo.png'
import surpreenda from '../assets/icones/surpreenda-me-inativo.png'
import { BoxMenu } from './menuStyled'

const Menu = () => {
  return (
    <BoxMenu>
      <ul>
        <li><a href='/'><img src={home}/> <span>Início</span></a></li>
        <li><a href='/'><img src={curtidas}/> <span>Mais curtidas</span></a></li>
        <li><a href='/'><img src={vistas}/>  <span>Mais vistas</span></a></li>
        <li><a href='/'><img src={novas}/> <span> Novas</span></a></li>
        <li><a href='/'><img src={surpreenda}/><span> Surpreenda-me</span></a></li>
      </ul>
    </BoxMenu>
  )
}

export default Menu
