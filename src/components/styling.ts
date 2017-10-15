import Glamorous , {CSSProperties, GlamorousComponent } from 'glamorous';

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

const flex: CSSProperties = {
  display: 'flex',
} 

const flexRow: CSSProperties = {
  ...flex,
  flexDirection: 'row',
}

const flexColumn: CSSProperties = {
  ...flex,
  flexDirection: 'column',
}

const valueContainer: CSSProperties =  {
  ...flex,
  padding: '5px 7px',
  margin: '2px',
  borderRadius: '5px',
  backgroundColor: colors.valueBackground,
  fontFamily: 'monospace',
  fontSize: '12pt',
  cursor: 'pointer',
}

const objectContainer: CSSProperties = {
  ...flex,
  flexDirection: 'column',
  padding: '1vmin',
  borderColor: colors.elementBorder,
  borderStyle: 'solid',
  borderWidth: '2px',
  borderRadius: '5px',
  backgroundColor: colors.containerBackground,
};

const arrayContainer: CSSProperties = {
  ...objectContainer,
  borderRadius: '2px',
}

const keyValueContainer: CSSProperties = {
  borderRadius: 5,
  borderWidth: 5,
  borderColor: colors.elementBorder,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
}

const expanderButton: CSSProperties = {
  cursor: 'pointer',
  ...flex,
  width: '0px',
  height: '0px',
}

const triangleLeft: CSSProperties = {
  borderLeft: `10px solid ${colors.expanderColor}`,
  borderTop: '5px solid transparent',
  borderBottom: '5px solid transparent',
}

const triangleDown: CSSProperties = {
  borderTop: `10px solid ${colors.expanderColor}`,
  borderRight: '5px solid transparent',
  borderLeft: '5px solid transparent',
}

const expanderContainer: CSSProperties = {
  ...objectContainer,
  background: colors.expanderBackgroundColor
}

const expanderTitle: CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '10pt',
}

export const ObjectContainer = Glamorous.span(objectContainer);
export const ArrayContainer = Glamorous.span(arrayContainer);
export const StringContainer = Glamorous.span(valueContainer);
export const NumberContainer = Glamorous.span(valueContainer);
export const NullContainer = Glamorous.span(valueContainer);
export const BooleanContainer = Glamorous.span(valueContainer);
export const KeyValueContainer = Glamorous.div(keyValueContainer);
export const ExpanderContainer = Glamorous.div(expanderContainer);
export const ExpanderTitle = Glamorous.div(expanderTitle);
export const ExpanderButton: any = Glamorous.div(propStyles({
  expanded: (props: any) => ({...expanderButton, ...(props.expanded ? triangleDown : triangleLeft)})
}));

