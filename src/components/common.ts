
export type EditingState = {
  editing: boolean
}

export type InputState<T> = {
  input?: T
}


export type ValueProps<T> = {
  value: T,
  onChange: (newValue: T) => void
}
