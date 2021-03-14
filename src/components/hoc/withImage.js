import React from 'react';
import SwapiService from '../../services/swapi-service';


export function withImage(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        path: null,
        isLoaded: false,
        swapiService: new SwapiService(),
      };
    }

    componentDidMount() {
      this.setState({ isLoaded: false })
      this.state.swapiService.getImage(this.props.item?.id, this.props.category)
        .then((path) => {
          this.setState({ path: path, isLoaded: true})
        })
    }

    render() {
      return <WrappedComponent path={this.state.path} isLoaded={this.state.isLoaded} {...this.props} />;
    }
  };
}