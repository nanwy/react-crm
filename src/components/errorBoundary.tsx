import React, { ReactNode } from 'react'
type FallbackRender = (props: { error: Error | null }) => React.ReactElement

// export class ErrorBoundary extends React.Component<{children:ReactNode,fallbackRender:FallbackRender},any>{
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null }

  // 当抛出异常会接受到并调用
  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    const { error } = this.state
    const { fallbackRender, children } = this.props
    if (error) {
      return fallbackRender({ error })
    }
    return children
  }
}
