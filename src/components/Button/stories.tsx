/* eslint-disable prettier/prettier */
import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Button',
  component: Button
  } as Meta


export const Basic: Story = (args) => <Button {...args} />
