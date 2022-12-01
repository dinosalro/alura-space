import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import { HeaderContainer } from './headerStyled'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <div>
        <input placeholder='O que você procura?'/>
        <img src={search} alt="Icone Lupa" />
      </div>
    </HeaderContainer>
  )
}

export default Header
