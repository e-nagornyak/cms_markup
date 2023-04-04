import React, { FC, memo } from 'react'
import s from './Table.module.scss'
import { TableButton } from 'common'
import { TableHead } from 'features/table-wrapper/table/table-head/TableHead'
import { COLUMNS, RowsType } from 'features/table-wrapper/Table-constants'

type PropsType = {
  rows: RowsType[]
}

export const Table: FC<PropsType> = memo(({ rows }) => {
  return (
    <div>
      <table className={s.tableWithGrid}>
        <thead>
          <tr>
            {COLUMNS.map(c => (
              <TableHead title={c.title} key={c.id} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.company}</td>
              <td>{r.phone}</td>
              <td>{r.email}</td>
              <td>{r.country}</td>
              <td>
                <TableButton title={r.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})
