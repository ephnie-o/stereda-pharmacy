import { forwardRef } from 'react'
import clsx from 'clsx'

const ContainerOuter = forwardRef(function OuterContainer(
    { className, children, ...props },
    ref,
) {
    return (
      <div ref={ref} className={clsx(className)} {...props}>
        <div>{children}</div>
      </div>
    )
})

const ContainerInner = forwardRef(function InnerContainer(
    { className, children, ...props },
    ref,
) {
    return (
      <div
        ref={ref}
        className={clsx('px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-6xl">{children}</div>
      </div>
    )
})

const Container = forwardRef(function Container(
    { children, ...props },
    ref,
  ) {
    return (
      <ContainerOuter ref={ref} {...props}>
        <ContainerInner>{children}</ContainerInner>
      </ContainerOuter>
    )
})

export function SimpleLayout({ title, intro, children }) {
    return (
      <Container className="mt-6 sm:mt-8">
        <header>
          <h1 className="text-4xl text-center font-bold tracking-tight text-zinc-600 sm:text-3xl">
            {title}
          </h1>
          <p className="mt-6 text-base text-zinc-600">
            {intro}
          </p>
        </header>
        {children && <div className="mt-16 sm:mt-10">{children}</div>}
      </Container>
    )
}