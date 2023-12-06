import { Typography } from '@/components/typography/typography'
import { Meta } from '@storybook/react'

export default {
  component: Typography.Body,
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography.Body>

export const AllTypography = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography.Body>Base text (Body)</Typography.Body>
      <Typography.Caption>Base text (Caption)</Typography.Caption>
      <Typography.Error>Base text (Error)</Typography.Error>
      <Typography.H1>Base text (H1)</Typography.H1>
      <Typography.H2>Base text (H2)</Typography.H2>
      <Typography.H3>Base text (H3)</Typography.H3>
    </div>
  ),
}
