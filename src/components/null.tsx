import * as React from 'react';
import { ValueProps } from './common';
import { NullContainer } from './styling';

export type NullProps = ValueProps<null>;

export const NullComponent: React.StatelessComponent<NullProps> = () => <NullContainer>
  NULL
</NullContainer>

