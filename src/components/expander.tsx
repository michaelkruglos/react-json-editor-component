import * as React from 'react';
import { ExpanderButton, ExpanderContainer, ExpanderTitle } from './styling';


export type ExpanderState = {
  expanded: boolean
}

export type ExpanderProps = {
  expanded: boolean
  title: string
}

export class Expander extends React.Component<ExpanderProps, ExpanderState> {
  constructor(props: ExpanderProps) {
    super(props);
    this.state = { expanded: props.expanded };
  }

  render() {
    return <ExpanderContainer >
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <ExpanderButton expanded={this.state.expanded} onClick={() => this.setState({ expanded: !this.state.expanded })} />
        <ExpanderTitle>{this.props.title}</ExpanderTitle>
      </div>
      <div>{this.state.expanded ? this.props.children : null}</div>
    </ExpanderContainer >
  }
}