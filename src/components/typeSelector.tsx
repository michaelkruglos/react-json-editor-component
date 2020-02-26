import * as React from 'react';
import * as R from 'ramda';
import { ComponentByType } from './componentByType';

export type TypeSelectorProps = {
  onAdd: (newValue: any) => void,
}

const typeToDefaultValue = (type: string) => {
  switch (type) {
    case 'Number': return 0;
    case 'Boolean': return false;
    case 'Null': return null;
    case 'Array': return [];
    case 'Object': return {};
    case 'String':
    default: return '';
  }
};


export const TypeSelector = ({ onAdd }: TypeSelectorProps) => {
  const [value, setValue] = React.useState<any>('');

  return (<div style={{ display: 'flex', flexDirection: 'row' }} >
    <ComponentByType value={value} onChange={setValue} />
    <select onChange={evt =>
evt.target.value === R.type(value) ? value : setValue(typeToDefaultValue(evt.target.value))
    }>
      <option value="String">string</option>
      <option value="Number">number</option>
      <option value="Boolean">boolean</option>
      <option value="Null">null</option>
      <option value="Array">array</option>
      <option value="Object">object</option>
    </select>
    <button onClick={_ => { onAdd(value); setValue(null); }}>Done</button>
  </div>)
};