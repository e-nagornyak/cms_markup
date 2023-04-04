import React, { FC, memo } from 'react'
import s from './Nav-list.module.scss'
import { NavItem } from 'common'
import { LIST } from 'features'

export const NavList: FC = memo(() => {
  return (
    <div className={s.nav_list}>
      {LIST.map(l => (
        <NavItem key={l.id} isActive={l.isActive} title={l.title} icon={l.icon} />
      ))}
    </div>
  )
})
