import * as React from 'react';
import { EditingState, InputState, ValueProps } from './common';
import { BooleanContainer } from './styling';

export type BooleanProps = ValueProps<boolean>;

export type BooleanState = EditingState & InputState<boolean>;

export const BooleanComponent: React.StatelessComponent<BooleanProps> = ({ value, onChange }: BooleanProps) => <BooleanContainer>
  <input type="checkbox" checked={value} onChange={()=> onChange(!value)} />
</BooleanContainer>
