import { CSSProperties, FC, ReactNode } from 'react'

export type TypographyProps<T extends ReactTag> = {
  children: ReactNode
  className?: string
  color?: CSSProperties['color']
  component?: T
}

const createTypographyComponent = <T extends ReactTag>(
  basicClassName: Component
): FC<TypographyProps<T>> => {
  return <Component className={className}>{children}</Component>
}
