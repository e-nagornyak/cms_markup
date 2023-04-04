import React, { FC, memo } from 'react'

type PropsType = {
  title: string
  icon: string
  alt?: string
  onClick?: () => {}
}

export const NavItem: FC<PropsType> = memo(({ title, icon, onClick, alt = 'icon' }) => {
  return (
    <div onClick={onClick}>
      <img src={icon} alt={alt} />
      <h4>{title}</h4>
      <img src="" alt="" />
    </div>
  )
})
