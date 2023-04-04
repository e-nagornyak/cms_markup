import React, { ChangeEvent, FC, memo, useEffect, useState } from 'react'
import s from './SearchInput.module.scss'
import { useDebounce } from 'hooks/useDebounce'

type PropsType = {
  searchHandler: (value: string) => void
}

export const SearchInput: FC<PropsType> = memo(({ searchHandler }) => {
  const [value, setValue] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  const debounceValue = useDebounce(value, 500)

  useEffect(() => {
    searchHandler(value)
  }, [debounceValue])

  return (
    <div className={s.wrapper}>
      <input onChange={onChangeHandler} placeholder="Search" className={s.input} />
    </div>
  )
})
