import { RowsType } from 'features/table-wrapper/Table-constants'

type ActionsType = setTableDataType | searchValueType

export const tableReducer = (state: RowsType[], action: ActionsType) => {
  switch (action.type) {
    case 'SET-DATA':
      return action.payload.rows
    case 'SEARCH-VALUE': {
      return state.filter(el => {
        const values = Object.values(el)
        return values.some(w => w.toLowerCase().includes(action.payload.value.toLowerCase()))
      })
    }

    default:
      return state
  }
}

type searchValueType = ReturnType<typeof searchValue>
export const searchValue = (value: string) => ({ type: 'SEARCH-VALUE', payload: { value } } as const)

type setTableDataType = ReturnType<typeof setTableData>
export const setTableData = (rows: RowsType[]) => ({ type: 'SET-DATA', payload: { rows } } as const)
