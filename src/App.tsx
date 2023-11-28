import { Typography } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button
        as={'a'}
        href={'http://localhost:6006/?path=/story/components-ui-button--primary'}
        variant={'primary'}
      >
        button as link
      </Button>
      <Button as={'button'} variant={'secondary'}>
        button as button
      </Button>
      <Button disabled fullWidth variant={'tertiary'}>
        variant link
      </Button>
      <Typography.Body1 component={'h1'}>{'Жили у бабуси 2 веселых гуся!'}</Typography.Body1>
    </div>
  )
}
