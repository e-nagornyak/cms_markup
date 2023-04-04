import { v1 } from 'uuid'
import cube from 'assept/images/nav-list/cube.svg'
import discount from 'assept/images/nav-list/discount.svg'
import message from 'assept/images/nav-list/message.svg'
import user from 'assept/images/nav-list/user.svg'
import wallet from 'assept/images/nav-list/wallet.svg'

type ListType = {
  id: string
  title: string
  icon: string
  isActive: boolean
}

export const LIST: ListType[] = [
  { id: v1(), title: 'Product', icon: cube, isActive: false },
  { id: v1(), title: 'Customers', icon: user, isActive: true },
  { id: v1(), title: 'Income', icon: wallet, isActive: false },
  { id: v1(), title: 'Promote', icon: discount, isActive: false },
  { id: v1(), title: 'Help', icon: message, isActive: false }
]
