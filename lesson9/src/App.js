import ThemeContext from './ThemeContext';
import {useContext} from 'react'

const App = () => {
	return (
		<ThemeContext.Provider value={{theme: "dark:"}}>
      <h1>ABCD</h1>
		</ThemeContext.Provider>
	)
}

export default App;
