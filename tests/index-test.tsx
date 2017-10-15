import * as expect from 'expect';
import * as React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';

import {StringComponent} from '../src/';

describe('Component', () => {
  let node: HTMLElement;

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    const original = "";
    let current = original;
    const W = 1;
    render(<StringComponent value={current} onChange={(newValue) => current = newValue} />, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })

})
