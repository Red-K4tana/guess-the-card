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
      <Typography.H1>{'Жили у бабуси 2 веселых гуся!'}</Typography.H1>
      <Typography.Body>{'Один серый другой белый'}</Typography.Body>
      <Typography.H3>{'2 веселых гуся'}</Typography.H3>
    </div>
  )
}
