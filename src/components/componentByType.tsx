import * as React from 'react';
import * as R from 'ramda';
import { ArrayComponent } from './array';
import { ObjectComponent } from './object';
import { StringComponent } from './string';
import { NumberComponent } from './number';
import { BooleanComponent } from './boolean';
import { NullComponent } from './null';

export type ComponentByTypeProps = {
  value: any,
  onChange: (newValue: any) => void
};

export const ComponentByType = ({ value, onChange }: ComponentByTypeProps) => {
  const type = R.type(value);
  switch(type) {
    case 'String': return <StringComponent value={value} onChange={onChange} />;
    case 'Number': return <NumberComponent value={value} onChange={onChange} />;
    case 'Object': return <ObjectComponent value={value} onChange={onChange} />;
    case 'Array': return <ArrayComponent value={value} onChange={onChange} />;
    case 'Boolean': return <BooleanComponent value={value} onChange={onChange} />;
    case 'Null': return <NullComponent value={value} onChange={onChange} />;
    default: return <div>{`Unimplemented component ${type}`}</div>;
  }
}
