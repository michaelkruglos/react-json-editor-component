import * as React from 'react';
import { ArrayContainer } from './styling';
import { ComponentByType } from './componentByType';
import { Expander } from './expander';
import { TypeSelector } from './typeSelector';
import R = require('ramda');

export type ArrayProps = {
  value: any[],
  onChange: (newArray: any[]) => void,
}

const replaceInArray = (array: any[], newValue: any, index: number) => {
  const newArray = [...array];
  newArray.splice(index, 1, newValue);
  return newArray;
}

export const ArrayComponent = ({ value, onChange }: ArrayProps) => {
  const [adding, setAdding] = React.useState(false);

  return (<ArrayContainer>
  <Expander expanded={true} title={`array [ ${value.length} ]`} >
    {
      ...value.map((item, index) =>
        <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ fontFamily: 'monospace', fontWeight: 600, cursor: 'pointer' }}
            onClick={() => onChange(R.remove(index, 1, value))}>-</div>
          <ComponentByType key={index}
            value={item}
            onChange={(newValue: any) => onChange(replaceInArray(value, newValue, index))}
          />
        </div>)
    }
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ cursor: 'pointer', fontFamily: 'monospace', fontWeight: 600 }} title="Add Item" onClick={() => setAdding(!adding)} >+</div>
      {adding
        ? <TypeSelector onAdd={(newValue: any) => { setAdding(false); onChange([...value, newValue]); }} />
        : null}
    </div>
  </Expander>
</ArrayContainer>);
};
