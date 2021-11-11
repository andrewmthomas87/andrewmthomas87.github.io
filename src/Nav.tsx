import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import resumeURL from './Andrew-Thomas-Resume-Full.pdf'

const Nav: React.FC = () => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('xs'))

	return (
		<AppBar position="fixed" elevation={0}>
			<Toolbar variant="dense">
				<Typography variant="h5" fontFamily="'Bebas Neue', cursive">
					{matches ? 'Andrew Thomas' : 'AT'}
				</Typography>
				<Box flex={1} />
				<Stack direction="row" spacing={{ xs: 2, sm: 3 }} alignItems="center">
					<Stack direction="row" spacing={{ xs: 0.5, sm: 1 }}>
						<IconButton color="inherit" href="https://github.com/andrewmthomas87/" target="_blank">
							<GitHubIcon fontSize="small" />
						</IconButton>
						<IconButton color="inherit" href="https://www.linkedin.com/in/andrew-t-97662796/" target="_blank">
							<LinkedInIcon fontSize="small" />
						</IconButton>
					</Stack>
					<Button variant="contained" disableElevation href={resumeURL} target="_blank" size="small">
						View resume
					</Button>
				</Stack>
			</Toolbar>
		</AppBar>
	)
}

export default Nav
