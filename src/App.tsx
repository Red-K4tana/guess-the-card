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
      <Button as={'button'} className={'additionalClass'} variant={'secondary'}>
        button as button
      </Button>
      <Button disabled fullWidth variant={'link'}>
        variant link
      </Button>
    </div>
  )
}
