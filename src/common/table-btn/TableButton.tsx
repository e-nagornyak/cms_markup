import React, { FC, memo } from 'react'
import s from './TableButton.module.scss'

type PropsType = {
  title: 'active' | 'Inactive'
  onClick?: () => void
}

export const TableButton: FC<PropsType> = memo(({ title, onClick }) => {
  return (
    <button className={s.table_btn} disabled={title === 'Inactive'} onClick={onClick}>
      {title}
    </button>
  )
})
