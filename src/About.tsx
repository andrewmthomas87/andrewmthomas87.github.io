import { Container, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import portraitURL from 'assets/portrait.jpg'

const about = `
Hi! My name is Andrew Thomas. I'm a software developer primarily experienced in full-stack development. I grew up in Longmont, Colorado before attending Northwestern University in Evanston, Illinois, where I studied Computer Science and engineering. Now, I'm back in Boulder, CO working as a software engineer for The Toro Company.
I've been writing code and working with robots for a while now and I love it. I've worked for a couple tech startups where I've developed several applications from the ground up. With company growth, I've spent time integrating new developers, which has sparked my interest in mentoring. I mentor a competetive high school robotics team and led a tech-focused student group.
When I get the chance, I snowboard, play hockey, cruise around on my electric skateboard, or drive about soaking in Colorado's beauty.
`
const paragraphs = about.split('\n').filter((x) => !!x)

const About: React.FC = () => (
	<Box pb={3}>
		<Box px={1} py={3} fontFamily="'Fira Code', monospace" textAlign="center">
			The best way to predict the future is to invent it <span style={{ opacity: 0.75 }}>// Alan Kay</span>
		</Box>
		<Container maxWidth="md" sx={{ px: 1, py: 2 }}>
			<Paper sx={{ p: { xs: 3, md: 4 }, bgcolor: '#18191d' }}>
				<Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems={{ xs: 'center', md: 'flex-start' }}>
					<Box
						width="20em"
						height="20em"
						flexShrink={0}
						sx={{
							backgroundImage: `url(${portraitURL})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					/>
					<Box>
						{paragraphs.map((p, index) => (
							<Typography key={index} variant="body1" paragraph>
								{p}
							</Typography>
						))}
					</Box>
				</Stack>
			</Paper>
		</Container>
	</Box>
)

export default About
