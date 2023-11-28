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

    console.log(Component)

    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    )
  }
}

export const Typography = {
  Body1: createTypographyComponent('body1'),
  Body2: createTypographyComponent('body2'),
  Caption: createTypographyComponent('caption'),
  H1: createTypographyComponent('h1'),
}

const COMPONENTS = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  captionBold: 'caption',
  captionLink: 'a',
  error: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  link: 'a',
  overline: 'p',
  subtitle1: 'p',
  subtitle2: 'p',
  subtitleLink: 'span',
} as const
