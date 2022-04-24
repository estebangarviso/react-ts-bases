import { FC, useReducer, useState } from 'react'

type ActionType = { type: 'increment' | 'decrement' | 'reset' } | { type: 'incrementBy'; by: number }

interface State {
  count: number
}

const initialState: State = {
  count: 0,
}

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return initialState
    case 'incrementBy':
      return { count: state.count + action.by }
    default:
      return state
  }
}

export const UseReducerWithOptions: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [count, setCount] = useState(0)

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'incrementBy', by: count })}>By</button>
      <label>
        Increment by given number
        <input type="number" value={count} onChange={e => setCount(Number(e.target.value))} />
      </label>
    </>
  )
}
