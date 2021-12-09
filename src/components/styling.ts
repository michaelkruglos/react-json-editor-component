import styled from "@emotion/styled";
import { css } from "@emotion/core";

const propStyles = (styles: any) =>
  (props: { [k: string]: any }) =>
    Object.keys(props)
      .filter(key => props[key] !== undefined)
      .map(key => styles[key])
      .map(value => typeof value === 'function'
        ? value(props)
        : value
      );

const colors = {
  valueBackground: 'lightgray',
  containerBackground: 'white',
  elementBorder: 'aqua',
  expanderColor: 'grey',
  expanderBackgroundColor: 'silver',
}

const valueContainer = css({
  display: "flex",
  padding: '5px 7px',
  margin: '2px',
  borderRadius: '3px',
  backgroundColor: colors.valueBackground,
  fontFamily: 'monospace',
  fontSize: '12pt',
  minHeight: '1em',
  minWidth: '1em',
  cursor: 'pointer',
});

const objectContainer = css({
  display: "flex",
  flexDirection: 'column',
  padding: '2px',
  borderColor: colors.elementBorder,
  borderStyle: 'solid',
  borderWidth: '2px',
  borderRadius: '3px',
  backgroundColor: colors.containerBackground,
});

const arrayContainer = css({
  ...objectContainer,
  borderRadius: '3px',
});

const keyValueContainer = css({
  borderRadius: '3px',
  borderWidth: 5,
  borderColor: colors.elementBorder,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
});

const expanderButton = css({
  cursor: 'pointer',
  display: "flex",
  width: '0px',
  height: '0px',
});

const triangleLeft = css({
  borderLeft: `10px solid ${colors.expanderColor}`,
  borderTop: '5px solid transparent',
  borderBottom: '5px solid transparent',
});

const triangleDown = css({
  borderTop: `10px solid ${colors.expanderColor}`,
  borderRight: '5px solid transparent',
  borderLeft: '5px solid transparent',
});

const expanderContainer = css({
  ...objectContainer,
  background: colors.expanderBackgroundColor
});

const expanderTitle = css({
  fontFamily: 'monospace',
  fontSize: '10pt',
});

export const ObjectContainer = styled.span(objectContainer);
export const ArrayContainer = styled.span(arrayContainer);
export const StringContainer = styled.span(valueContainer);
export const NumberContainer = styled.span(valueContainer);
export const NullContainer = styled.span(valueContainer);
export const BooleanContainer = styled.span(valueContainer);
export const KeyValueContainer = styled.div(keyValueContainer);
export const ExpanderContainer = styled.div(expanderContainer);
export const ExpanderTitle = styled.div(expanderTitle);
export const ExpanderButton: any = styled.div(propStyles({
  expanded: (props: any) => ({...expanderButton, ...(props.expanded ? triangleDown : triangleLeft)})
}));

