import { Component, useState, useEffect, FC } from 'react'

export class ClassComponent extends Component<{}, { counter: number }> {
  constructor(props: any) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  incrementCounter = () => {
    const { counter } = this.state
    this.setState({
      counter: counter + 1,
    })
  }

  componentDidMount() {
    document.title = 'Hello ClassComponent'
  }

  componentWillUnmount() {
    document.title = 'Goodbye ClassComponent'
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h1>Hello ClassComponent</h1>
        <p>Counter: {counter}</p>
        <button onClick={this.incrementCounter.bind(this)} type="button">
          Increment Counter
        </button>
        <ClassComponentHook />
      </div>
    )
  }
}

export const ClassComponentHook: FC = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = 'Hello ClassComponentHook'
    return () => {
      document.title = 'Goodbye ClassComponentHook'
    }
  }, [])

  return (
    <>
      <h1>Hello ClassComponentHook</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)} type="button">
        Increment Counter
      </button>
    </>
  )
}
