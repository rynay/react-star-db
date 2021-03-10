import { Component } from 'react';

class ErrorBoundary extends Component{
  state = {
    hasError: false,
  }

  componentDidCatch(){
    this.setState({ hasError: true })
  }

  render() {
    if(!this.state.hasError){
      return this.props.children
    }
    return <div>Ooopss... Something went wrong</div>
  }
}

export default ErrorBoundary;