import React, { FC, memo, useReducer } from 'react'
import { Table } from './table/Table'
import s from './TableWrapper.module.scss'
import { SearchInput, TablePagination } from 'common'
import { ROWS } from 'features'
import { searchValue, setTableData, tableReducer } from 'features/table-wrapper/reducer'

export const TableWrapper: FC = memo(() => {
  const [rows, dispatch] = useReducer(tableReducer, ROWS)

  const searchHandler = (value: string) => {
    dispatch(setTableData(ROWS))
    if (value) {
      dispatch(searchValue(value))
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.title_wrapper}>
          <h2 className={s.title}>All Customers</h2>
          <p className={s.subtitle}>Active Members</p>
        </div>
        <SearchInput searchHandler={searchHandler} />
      </div>
      <Table rows={rows} />
      <TablePagination />
    </div>
  )
})
