import { useEffect, useState } from 'react';
import SwapiService from '../../services/swapi-service';

export const withImage = (WrappedComponent) => (props) => {
  const [path, setPath] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const swapiService = new SwapiService();

  useEffect(() => {
    setIsLoaded(false);
    swapiService.getImage(props.item?.id, props.category).then((path) => {
      setPath(path);
      setIsLoaded(true);
    });

    return () => {
      setPath(null);
      setIsLoaded(false);
    };
  }, [props.item?.id]);

  return <WrappedComponent path={path} isLoaded={isLoaded} {...props} />;
};

// export function withImage(WrappedComponent) {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         path: null,
//         isLoaded: false,
//         swapiService: new SwapiService(),
//       };
//     }

//     componentDidMount() {
//       this.setState({ isLoaded: false });
//       this.state.swapiService
//         .getImage(this.props.item?.id, this.props.category)
//         .then((path) => {
//           this.setState({ path: path, isLoaded: true });
//         });
//     }
//     componentWillUnmount() {
//       this.setState({ path: null, isLoaded: false });
//     }

//     render() {
//       return (
//         <WrappedComponent
//           path={this.state.path}
//           isLoaded={this.state.isLoaded}
//           {...this.props}
//         />
//       );
//     }
//   };
// }
