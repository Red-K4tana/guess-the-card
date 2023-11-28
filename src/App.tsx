import { Typography } from '@/components/typography/typography'
import { Button } from '@/components/ui/button'

import s from '@/components/typography/typography.module.scss'

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
      <Typography.H1 className={s.h1}>{'Жили у бабуси 2 веселых гуся!'}</Typography.H1>
      <Typography.H1>{'Один серый другой белый'}</Typography.H1>
      <Typography.H1>{'2 веселых гуся'}</Typography.H1>
    </div>
  )
}
