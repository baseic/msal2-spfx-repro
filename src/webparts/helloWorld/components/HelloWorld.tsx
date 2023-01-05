import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    const {
      description
    } = this.props;

    return (
      <div>Hello world {description}</div>
    );
  }
}
