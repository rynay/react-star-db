import ErrorBoundary from '../error-boundary'

const Row = ({ left, right }) => {
  return (
    <div className="row">
        <div className="col-md-6">
          <ErrorBoundary>
            { left }
          </ErrorBoundary>
        </div>
        <div className="col-md-6">
          <ErrorBoundary>
            { right }
          </ErrorBoundary>
        </div>
    </div>
  );
}

export default Row;