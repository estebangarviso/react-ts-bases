import { createContext, FC, useContext, useState } from 'react'

const ThemeContext = createContext<{ theme: string; setTheme: (theme: string) => void }>({
  theme: 'light',
  setTheme: () => {},
})

export const ThemeContextComponent: FC = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ComponentA />
      <ComponentB />
    </ThemeContext.Provider>
  )
}

const ComponentA = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <h2>{theme}</h2>
    </>
  )
}

const ComponentB = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <>
      <h1>{theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme}</button>
    </>
  )
}
