import * as React from 'react';
import {render} from 'react-dom';

import { ObjectComponent } from '../../src';

type DemoState = {
  demoObject: any
}

type DemoProps = {
}

class Demo extends React.Component<DemoProps, DemoState> {
  constructor() {
    super();
    this.onChangeKeyValue = this.onChangeKeyValue.bind(this);
    this.state = {
      demoObject: {
        string: "some string",
        number: 3.14,
        boolean: false,
        "another boolean": true,
        null: null,
        array: [2.7, null, "string", ["another", "array"], { another: "object" }],
        object: { yet: "another object" },
      }
    }
  }

  onChangeKeyValue(newValue: any) {
    this.setState({ ...this.state, demoObject: newValue });
  }

  render() {
    return <div>
      <h1>react-json-editor-component Demo</h1>
      <ObjectComponent value={this.state.demoObject} onChange={this.onChangeKeyValue.bind(this)} />
      <pre>{JSON.stringify(this.state.demoObject, null, 4)}</pre>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
