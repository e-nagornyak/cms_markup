import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import icon from 'assept/images/nav-list/discount.svg'
import { NavItem } from 'common/nav-item/NavItem'
import { TablePagination } from 'common/table-pagination/TablePagination'

export default {
  title: 'Example/NavItem',
  component: NavItem,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof NavItem>

const Template: ComponentStory<typeof TablePagination> = args => <NavItem icon={icon} title="Example" isActive {...args} />
const Template2: ComponentStory<typeof TablePagination> = args => (
  <NavItem icon={icon} title="Example" isActive={false} {...args} />
)

export const ActiveNavItem = Template.bind({})
export const DefaultNavItem = Template2.bind({})
