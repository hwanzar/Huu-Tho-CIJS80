import {createContext} from 'react'

const defaultValue = {theme: "dark"}
const ThemeContext = createContext(defaultValue)

export default ThemeContext