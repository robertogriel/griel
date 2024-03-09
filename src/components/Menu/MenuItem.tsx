/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { MenuTypes } from '../../types/menu/Menu'

export const MenuItem = ({ href, icon, alt, strong, small }: MenuTypes) => {
  return (
    <li>
      <Link href={href}>
        <a>
          <img src={`/images/svg/menu-${icon}.svg`} alt={alt} />
          <div className="wrap">
            <strong>{strong}</strong>
            <small>{small}</small>
          </div>
        </a>
      </Link>
    </li>
  )
}
