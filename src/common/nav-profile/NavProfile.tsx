import React, { FC, memo } from 'react'
import s from './NavProfile.module.scss'
import photo from 'assept/images/person.svg'

export const NavProfile: FC = memo(() => {
  return (
    <div className={s.wrapper}>
      <img src={photo} alt="avatar" />
      <div className={s.info}>
        <h6 className={s.name}>Evano</h6>
        <p className={s.position}>Project Manager</p>
      </div>
    </div>
  )
})
