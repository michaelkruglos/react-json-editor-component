import * as React from 'react';
import { EditingState, InputState, ValueProps } from './common';
import { NumberContainer } from './styling';

export type NumberProps = ValueProps<number>;

export type NumberState = EditingState & InputState<number>;


export class NumberComponent extends React.Component<NumberProps, NumberState> {
  constructor(props: NumberProps) {
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
      this.props.onChange(this.state.input || 0);
    }
    this.setState({ editing: false });
  }

  updateInput(newInput: number) {
    this.setState({ input: newInput });
  }

  render() {
    return this.state.editing
      ? <NumberContainer>
        <input type="number"
          onChange={(evt) => this.updateInput(Number(evt.target.value))}
          value={this.state.input}
          onKeyPress={evt => evt.key === "Enter" ? this.apply() : null}
          onBlur={evt => this.apply()}
          autoFocus
        />
      </NumberContainer>
      : <NumberContainer onClick={this.edit}>{this.props.value}</NumberContainer>
  }
}
