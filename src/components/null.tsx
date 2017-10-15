import * as React from 'react';
import { EditingState, InputState, ValueProps } from './common';
import { NullContainer } from './styling';

export type NullProps = ValueProps<null>;

export const NullComponent: React.StatelessComponent<NullProps> = ({ value, onChange }: NullProps) => <NullContainer>
  NULL
</NullContainer>

