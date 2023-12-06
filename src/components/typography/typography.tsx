import { CSSProperties, ComponentPropsWithoutRef, ElementType, FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from '@/components/typography/typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  children: ReactNode
  className?: string
  color?: CSSProperties['color']
  component?: T
} & ComponentPropsWithoutRef<T>

type Component = keyof typeof COMPONENTS

const createTypographyComponent = <T extends ElementType>(
  basicClassName: Component
): FC<TypographyProps<T>> => {
  return ({ children, className, color, component, style, ...rest }) => {
    const Component = component || COMPONENTS[basicClassName] || 'span'

    const classNames = clsx(s[basicClassName], className)
    const styles = {
      ...(color && { color }),
      ...style,
    }

    return (
      <Component className={classNames} style={styles} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Body: createTypographyComponent('body'),
  Caption: createTypographyComponent('caption'),
  Error: createTypographyComponent('error'),
  H1: createTypographyComponent('h1'),
  H2: createTypographyComponent('h2'),
  H3: createTypographyComponent('h3'),
}

const COMPONENTS = {
  body: 'p',
  caption: 'caption',
  error: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
} as const
