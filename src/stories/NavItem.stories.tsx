import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TablePagination } from 'common/table-pagination/TablePagination'

export default {
  title: 'Example/TablePagination',
  component: TablePagination,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof TablePagination>

const Template: ComponentStory<typeof TablePagination> = args => <TablePagination {...args} />

export const PaginationWithText = Template.bind({})
