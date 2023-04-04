import React, { FC, memo } from 'react'
import { NavList } from './Nav-list/NavList'
import s from './Nav.module.scss'
import logo from 'assept/images/Logo.svg'
import version from 'assept/images/v.01.svg'
import { NavProfile } from 'common'

export const Nav: FC = memo(() => {
  return (
    <nav className={s.nav}>
      <div className={s.logo_wrapper}>
        <img className={s.logo} src={logo} alt="logo" />
        <img className={s.version} src={version} alt="version" />
      </div>
      <NavList />
      <NavProfile />
    </nav>
  )
})
