import { Component } from 'react'

type Props = {}
type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <div>Ooopss... Something went wrong</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
