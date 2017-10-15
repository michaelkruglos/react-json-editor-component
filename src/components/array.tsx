import * as React from 'react';
import { compose, withState, setDisplayName } from 'recompose';
import { ArrayContainer } from './styling';
import { ComponentByType } from './componentByType';
import { Expander } from './expander';
import { TypeSelector } from './typeSelector';

export type ArrayProps = {
  value: any[],
  onChange: (newArray: any[]) => void,
}

type ArrayState = {
  adding: boolean,
  setAdding: (adding: boolean) => void,
}

const replaceInArray = (array: any[], newValue: any, index: number) => {
  const newArray = [...array];
  newArray.splice(index, 1, newValue);
  return newArray;
}

const removeItem = (array: any[], itemIndex: number) => [
  ...array.slice(0, itemIndex),
  ...array.slice(itemIndex + 1)
];

export const ArrayComponent = compose<ArrayProps,ArrayProps>(
  setDisplayName('ArrayComponent'),
  withState('adding', 'setAdding', false),
)(({ value, onChange, adding, setAdding }: ArrayProps & ArrayState) => <ArrayContainer>
  <Expander expanded={true} title={`array [ ${value.length} ]`} >
    {
      ...value.map((item, index) =>
        <div key={index} style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ fontFamily: 'monospace', fontWeight: 600, cursor: 'pointer' }}
            onClick={() => onChange(removeItem(value, index))}>-</div>
          <ComponentByType key={index}
            value={value[index]}
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
