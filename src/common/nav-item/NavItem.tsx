import React, { FC, memo } from 'react'
import s from './NavItem.module.scss'
import arrow from 'assept/images/nav-list/arrow.svg'

type PropsType = {
  title: string
  icon: string
  alt?: string
  isActive: boolean
  onClick?: () => {}
}

export const NavItem: FC<PropsType> = memo(({ title, icon, isActive, onClick, alt = 'icon' }) => {
  return (
    <div className={`${s.wrapper} ${isActive && s.active}`} onClick={onClick}>
      <img className={s.icon} src={icon} alt={alt} />
      <h4 className={s.title}>{title}</h4>
      <img className={s.arrow} src={arrow} alt="arrow" />
    </div>
  )
})
