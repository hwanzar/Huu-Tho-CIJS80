import {useContext} from 'react'
import ThemeContext from "./ThemeContext"

const Login = () => {

	const themeCtx = useContext(ThemeContext)

	return (
		<div 
			style={{
				backgroundColor: themeCtx.theme === 'dark', 'white': 'black'
			}}
		>
			<LoginForm />
		</div>
	)
}

export default Login