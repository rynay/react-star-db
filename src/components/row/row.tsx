import ErrorBoundary from '../error-boundary'
import { ReactElement } from 'react'

type Props = {
  left: ReactElement
  right: ReactElement
}

const Row = ({ left, right }: Props) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <ErrorBoundary>{left}</ErrorBoundary>
      </div>
      <div className="col-md-6">
        <ErrorBoundary>{right}</ErrorBoundary>
      </div>
    </div>
  )
}

export default Row
