import React, { FC, memo } from 'react'
import ReactPaginate from 'react-paginate'
import s from './TablePagination.module.scss'
import 'app/App.css'

export const TablePagination: FC = memo(() => {
  return (
    <div className={s.wrapper}>
      <span className={s.text}>Showing data 1 to 8 of 256K entries</span>
      <ReactPaginate
        className={s.pagination}
        pageCount={10}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={() => {}}
        pageRangeDisplayed={5}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  )
})
