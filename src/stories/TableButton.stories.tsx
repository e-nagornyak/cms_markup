import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TableButton } from 'common/table-btn/TableButton'

export default {
  title: 'Example/TableButton',
  component: TableButton,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof TableButton>

const Template: ComponentStory<typeof TableButton> = args => <TableButton title="active" />
const Template2: ComponentStory<typeof TableButton> = args => <TableButton title="Inactive" />

export const ActiveButton = Template.bind({})
export const InactiveButton = Template2.bind({})
