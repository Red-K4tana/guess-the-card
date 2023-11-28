import { ComponentPropsWithoutRef, ElementType, FC, ReactNode } from 'react'

export type TypographyProps<T extends ElementType> = {
  children: ReactNode
  className?: string
  component?: T
} & ComponentPropsWithoutRef<T>

type Component = keyof typeof COMPONENTS

const createTypographyComponent = <T extends ElementType>(
  basicClassName: Component
): FC<TypographyProps<T>> => {
  return ({ children, className, component, ...rest }) => {
    const Component = component || COMPONENTS[basicClassName] || 'span'

    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Body: createTypographyComponent('body'),
  Caption: createTypographyComponent('caption'),
  H1: createTypographyComponent('h1'),
  H2: createTypographyComponent('h2'),
  H3: createTypographyComponent('h3'),
  Link: createTypographyComponent('link'),
}

const COMPONENTS = {
  body: 'p',
  caption: 'caption',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  link: 'a',
} as const
