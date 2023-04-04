import { v1 } from 'uuid'

type ColumnsType = {
  id: string
  title: string
}

export type RowsType = {
  id: string
  name: string
  company: string
  phone: string
  email: string
  country: string
  status: 'active' | 'Inactive'
}

export const COLUMNS: ColumnsType[] = [
  { id: v1(), title: 'Customer Name' },
  { id: v1(), title: 'Company' },
  { id: v1(), title: 'Phone Number' },
  { id: v1(), title: 'Email' },
  { id: v1(), title: 'Country' },
  { id: v1(), title: 'Status' }
]
export const ROWS: RowsType[] = [
  {
    id: v1(),
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    country: 'United States',
    email: 'jane@microsoft.com',
    status: 'active'
  },
  {
    id: v1(),
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    country: 'Kiribati',
    email: 'floyd@yahoo.com',
    status: 'Inactive'
  },
  {
    id: v1(),
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    country: 'Israel',
    email: 'ronald@adobe.com',
    status: 'Inactive'
  },
  {
    id: v1(),
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    country: 'Iran',
    email: 'marvin@tesla.com',
    status: 'active'
  },
  {
    id: v1(),
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629) 555-0129',
    country: 'Réunion',
    email: 'jane@microsoft.com',
    status: 'active'
  },
  {
    id: v1(),
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phone: '(406) 555-0120',
    country: 'Curaçao',
    email: 'kathryn@microsoft.com',
    status: 'active'
  },
  {
    id: v1(),
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    country: 'jacob@yahoo.com',
    email: 'Brazil',
    status: 'active'
  },
  {
    id: v1(),
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    country: 'Åland Islands',
    email: 'kristin@facebook.com',
    status: 'Inactive'
  }
]
