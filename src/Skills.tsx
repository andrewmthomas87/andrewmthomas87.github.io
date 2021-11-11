import { Chip, Divider, Stack, Typography, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const skills = `
Languages: TypeScript, JavaScript, Java, Go (Golang), C++, Dart, Python, Racket, SQL
Web: React, Svelte, MobX, RxJS, Redux, Google Maps, mapbox, deck.gl, React-vis, styled-components, LESS
Mobile: Flutter, React Native, Adobe PhoneGap
Server: Gin, Node.js, Express, gqlgen, GraphQL Java
Authn/authz: bcrypt, OAuth 2.0, JWT, Auth0, AWS Cognito, RBAC, ACL, Casbin
Network: HTTP, WebSocket, JSON, Protocol Buffers, GraphQL, MQTT, RabbitMQ, RPC
Storage: MySQL, PostgreSQL, PostGIS, Redis, Firebase
Tools: webpack, npm, bash, git, Babel, Docker, Figma
AWS: EC2, Lambda, S3, RDS, Cognito, ECR, API Gateway
Testing: Jest, Mocha, Storybook, JUnit, Cucumber
Robotics: OpenCV, path planning, motion profiling, localization, feedback loops
`
const table = skills
	.split('\n')
	.filter((x) => !!x)
	.map((x) => {
		const parts = x.split(': ')
		return {
			title: parts[0],
			values: parts[1].split(', '),
		}
	})
const midpoint = Math.ceil(table.length / 2)
const table1 = table.slice(0, midpoint)
const table2 = table.slice(midpoint)

const Skills: React.FC = () => {
	const theme = useTheme()

	return (
		<Box bgcolor={theme.palette.primary.main}>
			<Typography
				variant="h1"
				component="h2"
				pt={3}
				fontFamily="'Bebas Neue', cursive"
				fontSize={{ xs: '6em', sm: '6.5em', md: '7em' }}
				textAlign="center"
			>
				My Skills
			</Typography>
			<Box px={1} pt={2} pb={3} fontFamily="'Fira Code', monospace" textAlign="center">
				Computer Science is no more about computers than astronomy is about telescopes{' '}
				<span style={{ opacity: 0.75 }}>// Edsger W. Dijkstra</span>
			</Box>
			<Box width={1} overflow="auto">
				<Stack direction="row">
					<Box
						display="flex"
						flexDirection="column"
						width="fit-content"
						px={3}
						pb={4}
						mx="auto"
						bgcolor={theme.palette.primary.dark}
					>
						<Stack direction="row" spacing={3} p={3} pb={1}>
							{table1.map((x) => (
								<Box width="15em">
									<Typography variant="h6" fontFamily="'Fira Code', monospace">
										<Box component="span" pb={1} borderBottom={`1px solid ${theme.palette.primary.light}`}>
											{x.title}
										</Box>
									</Typography>
								</Box>
							))}
						</Stack>
						<Stack direction="row" spacing={3} p={3}>
							{table1.map((x) => (
								<Box width="15em">
									{x.values.map((v, index) => (
										<Box key={index} display="inline-block" pr={1} pb={1}>
											<Chip label={v} />
										</Box>
									))}
								</Box>
							))}
						</Stack>
						<Box py={1}>
							<Divider />
						</Box>
						<Stack direction="row" spacing={3} p={3} pb={1}>
							{table2.map((x) => (
								<Box width="15em">
									<Typography variant="h6" fontFamily="'Fira Code', monospace">
										<Box component="span" pb={1} borderBottom={`1px solid ${theme.palette.primary.light}`}>
											{x.title}
										</Box>
									</Typography>
								</Box>
							))}
						</Stack>
						<Stack direction="row" spacing={3} p={3}>
							{table2.map((x) => (
								<Box width="15em">
									{x.values.map((v, index) => (
										<Box key={index} display="inline-block" pr={1} pb={1}>
											<Chip label={v} />
										</Box>
									))}
								</Box>
							))}
						</Stack>
					</Box>
				</Stack>
			</Box>
		</Box>
	)
}

export default Skills
