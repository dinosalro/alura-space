import React from 'react'
import { BoxTag } from './tagsStyled'

const Tags = () => {
  return (
    <BoxTag>
      <p>Filtre por tags:</p>
      <ul>
        <li>Galaxías</li>
        <li>Estrelas</li>
        <li>Lua</li>
        <li>Nebulosas</li>
        <li>Todas</li>
      </ul>
    </BoxTag>
  )
}

export default Tags
