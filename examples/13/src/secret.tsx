import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface SecretComponentProps extends RouteComponentProps<void> {
}

interface SecretComponentState {
}

export default class Secret extends React.Component<SecretComponentProps, SecretComponentState> {
  constructor(props: SecretComponentProps) {
    super(props);
  }
  
  render() {
    return (<div />);
  }
}