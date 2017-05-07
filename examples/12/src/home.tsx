import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface HomeComponentProps extends RouteComponentProps<void> {
}

interface HomeComponentState {
}

export default class HomeComponent extends React.Component<HomeComponentProps, HomeComponentState> {
  constructor(props: HomeComponentProps) {
    super(props);
  }

  render() {
    return (
      <div />
    );
  }
}
