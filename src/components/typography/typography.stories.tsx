import type { Meta } from '@storybook/react'

import { Typography } from '@/components/typography/typography'
import { StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
  component: Typography.Body,
  tags: ['autodocs'],
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  render: () => <Typography.Body></Typography.Body>,
}
