import React from 'react'
import { MenuTypes } from '../../types/menu/Menu'

export const MenuItem = ({ href, icon, alt, strong, small }: MenuTypes) => {
  return (
    <li>
      <a href={href}>
        <a>
          <img src={`/images/svg/menu-${icon}.svg`} alt={alt} />
          <div className="wrap">
            <strong>{strong}</strong>
            <small>{small}</small>
          </div>
        </a>
      </a>
    </li>
  )
}
