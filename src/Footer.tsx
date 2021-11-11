import { Circle as CircleIcon } from '@mui/icons-material'
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'

const Footer: React.FC = () => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('md'))

	return (
		<Box p={3} bgcolor={theme.palette.primary.main}>
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				spacing={{ xs: 1, md: 3 }}
				justifyContent="center"
				alignItems="center"
				divider={matches ? <CircleIcon sx={{ fontSize: '0.5rem' }} /> : undefined}
			>
				<Typography variant="subtitle2" fontFamily="'Fira Code',monospace">
					1975 30<sup>th</sup> St, Boulder, CO 80301
				</Typography>
				<Typography variant="subtitle2" fontFamily="'Fira Code',monospace">
					(303) 598-9467
				</Typography>
				<Typography variant="subtitle2" fontFamily="'Fira Code',monospace">
					andrewthomas2021@u.northwestern.edu
				</Typography>
			</Stack>
		</Box>
	)
}

export default Footer
