import * as React from 'react';
import { EditingState, InputState, ValueProps } from './common';
import { StringContainer } from './styling';

export type StringProps = ValueProps<string>;

export type StringState = EditingState & InputState<string>;

export class StringComponent extends React.Component<StringProps, StringState> {
  constructor(props: StringProps) {
    super(props);

    this.edit = this.edit.bind(this);
    this.apply = this.apply.bind(this);
    this.updateInput =this. updateInput.bind(this);

    this.state = {
      editing: false,
    }
  }

  edit() {
    this.setState({ editing: true, input: this.props.value });
  }

  apply() {
    if (this.props.value !== this.state.input) {
      this.props.onChange(this.state.input || "");
    }
    this.setState({ editing: false });
  }

  updateInput(newInput: string) {
    this.setState({ input: newInput });
  }

  render() {
    return this.state.editing
      ? <StringContainer>
        <input type="text"
          value={this.state.input}
          onKeyPress={evt => evt.key === "Enter" ? this.apply() : null}
          onChange={evt => this.updateInput(evt.target.value)}
          onBlur={evt => this.apply()}
          autoFocus
        />
      </StringContainer>
      : <StringContainer onClick={this.edit}>{this.props.value}</StringContainer>
  }
}