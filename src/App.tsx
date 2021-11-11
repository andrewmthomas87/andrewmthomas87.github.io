import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import About from 'About'
import Experience from 'Experience'
import Footer from 'Footer'
import Nav from 'Nav'
import { useMemo } from 'react'
import Skills from 'Skills'
import Splash from 'Splash'

const App: React.FC = () => {
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: 'dark',
					primary: { main: '#303f9f' },
				},
			}),
		[]
	)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Nav />
			<Splash />
			<About />
			<Skills />
			<Experience />
			<Footer />
		</ThemeProvider>
	)
}

export default App
