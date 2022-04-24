import { createContext, FC, useContext, useState } from 'react'

interface CounterState {
  counter: number
  setCounter: (newCounter: number) => Promise<void>
  incrementCounter: () => void
}

export const CounterContext = createContext<{ A: CounterState; B: CounterState }>({
  A: { counter: Number(localStorage.getItem('counter')) ?? 0, setCounter: async () => {}, incrementCounter: () => {} },
  B: { counter: Number(localStorage.getItem('counterB')) ?? 0, setCounter: async () => {}, incrementCounter: () => {} },
})
/**
 * Contenxt with hooks
 */
const ComponentA: FC = () => {
  const {
    A: { counter, setCounter, incrementCounter },
  } = useContext(CounterContext)
  return (
    <>
      <p>Components working with Context API with hooks</p>
      <button onClick={() => setCounter(counter)}>{counter}</button>
      <button onClick={() => incrementCounter()}>{counter}</button>
    </>
  )
}

/**
 * Context with Consumer
 */
const ComponentB: FC = () => {
  return (
    <CounterContext.Consumer>
      {({ B: { counter, setCounter, incrementCounter } }) => (
        <>
          <p>Components working with Context API with Consumer</p>
          <button onClick={() => setCounter(counter)}>{counter}</button>
          <button onClick={() => incrementCounter()}>{counter}</button>
        </>
      )}
    </CounterContext.Consumer>
  )
}

export const Context: FC = () => {
  const [state, setState] = useState(0)
  const [stateB, setStateB] = useState(0)

  async function setData() {
    setState(1)
  }

  async function setDataB() {
    setStateB(1)
  }

  return (
    <CounterContext.Provider
      value={{
        A: {
          counter: state,
          setCounter: counter => setData(),
          incrementCounter: () => setState(state + 1),
        },
        B: {
          counter: stateB,
          setCounter: counter => setDataB(),
          incrementCounter: () => setStateB(stateB + 1),
        },
      }}
    >
      <ComponentA />
      <ComponentB />
    </CounterContext.Provider>
  )
}
