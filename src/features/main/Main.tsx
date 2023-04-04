import React, { FC, memo } from 'react'
import s from './Main.module.scss'
import { TableWrapper } from 'features'

export const Main: FC = memo(() => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Hello Evano 👋🏼,</h2>
      <main className={s.mainBlock}>
        <TableWrapper />
      </main>
    </section>
  )
})
