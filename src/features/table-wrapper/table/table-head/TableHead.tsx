import React, { FC } from 'react'
import s from './TableHead.module.scss'

type PropsType = {
  title: string
}

export const TableHead: FC<PropsType> = ({ title }) => {
  return (
    <th className={s.head_th}>
      <span>{title}</span>
    </th>
  )
}
