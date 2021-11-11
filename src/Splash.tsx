import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import andrewURL from 'assets/andrew.jpg'

const Splash: React.FC = () => (
	<Box height="100vh" display="flex" flexDirection="column" alignItems="stretch">
		<Box visibility="hidden">
			<AppBar position="static">
				<Toolbar variant="dense" />
			</AppBar>
		</Box>
		<Box
			flex={1}
			position="relative"
			sx={{ backgroundImage: `url(${andrewURL})`, backgroundSize: 'cover', backgroundPosition: '60% 57.5%' }}
		>
			<Typography
				variant="h1"
				color="white"
				position="absolute"
				bottom="0.75em"
				left={{ xs: '0.375em', sm: '0.5em', md: '0.75em' }}
				fontFamily="'Bebas Neue', cursive"
				fontSize={{ xs: '7em', sm: '7.5em', md: '8em' }}
				letterSpacing="0"
				lineHeight="0.875em"
			>
				Andrew
				<br />
				Thomas
			</Typography>
		</Box>
	</Box>
)

export default Splash
