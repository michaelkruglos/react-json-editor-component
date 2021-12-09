import * as React from 'react';
import { StringComponent } from './string';
import { ComponentByType } from './componentByType';
import { ObjectContainer, KeyValueContainer } from './styling';
import { Expander } from './expander';
import { TypeSelector } from './typeSelector';

export type ObjectState = {
  value: any
  adding: boolean,
  newKey: string,
}

export type ObjectProps = {
  value: {},
  onChange: (newValue: {}) => void,
}

type KeyValueProps = {
  keyName: string,
  value: any,
  onKeyChange: (newKeyName: string) => void,
  onValueChange: (newValue: any) => void,
}


const KeyValue: React.SFC<KeyValueProps> = ({ keyName, value, onKeyChange, onValueChange }) =>
  <KeyValueContainer >
    <StringComponent value={keyName} onChange={onKeyChange} />
    <ComponentByType value={value} onChange={onValueChange} />
  </KeyValueContainer>
  ;

export class ObjectComponent extends React.Component<ObjectProps, ObjectState> {
  constructor(props: ObjectProps) {
    super(props);
    this.onChangeKeyValue = this.onChangeKeyValue.bind(this);
    this.state = {
      value: props.value,
      adding: false,
      newKey: '',
    }
  }

  onChangeKeyValue(key: string, newValue: any) {
    const newObject = { ...this.state.value, [key]: newValue };
    this.setState({ ...this.state, value: newObject });
    this.props.onChange(newObject);
  }

  onChangeKeyName(key: string, newName: string) {
    const oldValue = this.state.value[key];
    const newObject = Object.keys(this.state.value)
      .filter(k => k !== key)
      .reduce((acc: any, k: string) => (acc[k] = this.state.value[k], acc), {});
    newObject[newName] = oldValue;

    this.setState({ ...this.state, value: newObject });
    this.props.onChange(newObject);
  }

  onRemoveItem(key: string) {
    const newObject = Object.keys(this.state.value)
      .filter(k => k !== key)
      .reduce((acc: any, k: string) => (acc[k] = this.state.value[k], acc), {});

    this.setState({ ...this.state, value: newObject });
    this.props.onChange(newObject);
  }

  onAddItem(key: string, value: any) {
    const newObject = { ...this.state.value, [key]: value };

    this.setState({ ...this.state, value: newObject, adding: false });
    this.props.onChange(newObject);
  }

  toggleAdding() {
    const adding = !this.state.adding;
    const newKey = "";
    this.setState({ ...this.state, adding, newKey });
  }

  render() {
    const data = this.state.value;
    const childEntries = Object.keys(data)
      .map(key =>
        <div key={key} style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ fontFamily: 'monospace', fontWeight: 600, cursor: 'pointer' }}
            onClick={() => this.onRemoveItem(key)}>-</div>
          <KeyValue keyName={key} value={data[key]}
            onKeyChange={this.onChangeKeyName.bind(this, key)}
            onValueChange={this.onChangeKeyValue.bind(this, key)}
          />
        </div>);
    return <ObjectContainer>
      <Expander expanded={true} title={`object { ${Object.keys(data).length} }`} >
        {[...childEntries]}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ cursor: 'pointer', fontFamily: 'monospace', fontWeight: 600 }}
            title="Add Item"
            onClick={() => this.toggleAdding()} >+</div>
          {this.state.adding
            ? <KeyValueContainer >
              <StringComponent value={`${this.state.newKey}`} onChange={newKey => this.setState({ ...this.state, newKey })} />
              <TypeSelector onAdd={(newValue: any) => this.onAddItem(this.state.newKey, newValue)} />
        </KeyValueContainer>
            : null }
        </div>
      </Expander>
    </ObjectContainer>;
  }
}
