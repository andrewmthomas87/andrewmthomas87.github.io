import { CheckCircle as CheckCircleIcon } from '@mui/icons-material'
import {
	Chip,
	Container,
	Link,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Stack,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material'
import { Box } from '@mui/system'

function experienceFromRaw(raw: string) {
	const experiences = raw.trim().split('\n\n')
	return experiences.map((experience) => {
		const parts = experience.split('\n')

		const top = parts[0].split(' - ')
		const [title, subtitle] = top[0].split('(')
		const time = top[1]
		const role = top[2]

		const [url, description] = parts[1].split(' - ')

		const blocks = []
		let block = []
		for (let i = 2; i < parts.length; i++) {
			if (parts[i][0] === '*') {
				block.push(parts[i].substr(2))
			} else {
				blocks.push(block)
				blocks.push(parts[i])
				block = []
			}
		}
		if (block.length > 0) {
			blocks.push(block)
		}

		return { title, subtitle, url, description, time, role, blocks }
	})
}

const professional = experienceFromRaw(`
The Toro Company (by acquisition) - March 2021 — Current - Specialist I
https://www.thetorocompany.com/ - a leading worldwide provider of innovative solutions for the outdoor environment including turf and landscape maintenance, snow and ice management, underground utility construction, rental and specialty construction, and irrigation and outdoor lighting solutions.
* Researched and implemented authentication, authorization, and accounting (AAA) system to provide single sign-on (SSO) and consolidate AAA among company applications using Go, Java, AWS Cognito, OAuth 2.0, Casbin, and Redis.
* Built MVP data ingestion and visualization application; coordinated with hardware team and customer to validate.
* Developed web boilerplate and common packages using React, RxJS, MUI, Vite, Jest, Testing Library, and Storybook.

Left Hand Robotics (startup) - August 2020 — March 2021 - Software Engineer
https://lefthandrobotics.com - founded in 2016 in Longmont, Colorado, Left Hand Robotics designs commercial-class smart robots that work autonomously, allowing property managers, municipalities and contractors alike to become more efficient and do more with existing resources.
* Built single-page application to ingest and visualize streams of sensor data, including interactive visualization builder interfaces for spatial-temporal data using deck.gl, React-vis, styled-components, mapbox, and RxJS.
* Developed API microservices to manage and query enriched sensor data using Go, Auth0, PostgreSQL, and PostGIS.
* Built end-to-end pipeline to stream robot camera feeds to a dashboard with AWS Kinesis Video, GStreamer, and C++.

CBOE Global Markets - June 2020 — August 2020 - Software Engineer Summer Intern
https://www.cboe.com/ - is an American company that owns the Chicago Board Options Exchange and the stock exchange operator BATS Global Markets.
* Coordinated with research team to learn methodology of Cboe S&P 500 Covered Combo (CMBO) Index.
* Implemented daily and roll day calculation for CMBO using Java, Apache Kafka, Hazelcast, and internal frameworks.
* Developed unit tests (JUnit) to verify calculation correctness and behavior tests (Cucumber) to verify integration.

Left Hand Robotics (startup) - June 2019 — September 2019 - Software Developer, Intern
https://lefthandrobotics.com - founded in 2016 in Longmont, Colorado, Left Hand Robotics designs commercial-class smart robots that work autonomously, allowing property managers, municipalities and contractors alike to become more efficient and do more with existing resources.
* Developed storage mechanism, API, models, and data migration tooling for enhanced object storage and mutation system to solve major server and network bottleneck using Google Protocol Buffers and Java.
* Built client-side library for reactive consumption, in-place mutation, and upload of Google Protocol Buffer objects.
* Redeveloped GPS path editing tools to compute mutations on client using React, MobX, Turf.js, and Google Maps API.
June 2018 — September 2018
* Redesigned two primary frontends to meet new customer needs and integrate the Ant Design framework for React.
* Researched area coverage and cell decomposition techniques and built POC planning algorithm using Go and Python.
* Developed complex GPS path editing web interface and server API for persistence and advanced geometric mutation.
* Created robot monitoring page to remotely control robots and visualize real-time status and geospatial data using React, TypeScript, MQTT over WebSocket, Google Maps API, and MobX.
May 2017 — March 2018
* Built complex robot operations center web application for managing inventory, collecting GPS path data, robot tasks, and reports, for customer and internal support usage, utilizing TypeScript, React, MobX, LESS, and webpack.
* Developed registration, token-based authentication, and RBAC authorization systems using Java, bcrypt, and JWT.
* Implemented internal message consumption and routing system on top of RabbitMQ using custom message protocol for HTTP and WebSocket requests to automate communication between microservices using Java and Grizzly NIO.
* Built API for fetching object model descriptors, object data, and links between objects using the Java Reflection API.

Workday - Summer 2016 - GW Software Engineering Intern
https://www.workday.com/ - is an American on‑demand (cloud-based) financial management and human capital management software vendor.
* Worked closely with senior developer to build real-time, collaborative document editing web application.
* Implemented operational transformation algorithm to correctly and efficiently reconcile concurrent client edits.
* Demoed minimum viable product to product developers and senior management executives and discussed next steps.
Summer 2015
* Refactored core service classes from CoffeeScript to modern JavaScript and performed testing to ensure correctness.
* Collaborated with junior developer to refactor and rework reusable modal wizard component using ES2015.
* Debugged and implemented fixes for user-reported bugs for bi-weekly product releases.
`)
const extracurricular = experienceFromRaw(`
FRC 1619 Up-A-Creek Robotics - August 2020 — Current - App Software Mentor
https://www.team1619.org - a high school FIRST Robotics Competition team.
* Mentor the app software team, responsible for developing web and mobile applications for data collection and analysis at robotics events. Teach high school students basic development skills like git and bash as well as full stack development using React, React Native, and Node.js.

EPIC (Northwestern club) - September 2017 — June 2018 - Tech Team Co-director
https://epicnorthwestern.com - Northwestern's undergraduate entrepreneurship club.
* Co-directed Tech team: ran team meetings, taught software development technologies including React, Node.js, pugjs, and Flask, and oversaw and provided mentorship for student projects.
* Led .io, a program that aimed to provide students an experience comparable to that of working in a software-oriented startup while in a forgiving environment with an emphasis on learning (https://andrewt.io/.io).

FRC 1619 Up-A-Creek Robotics - January 2014 — September 2017 - Software Lead
https://www.team1619.org - a high school FIRST Robotics Competition team.
* Led development of software for several competition robots, developing effective teleoperation controls and complex autonomous routines (https://github.com/Team1619).
* Taught students of various skill levels Java programming, basic control theory, path planning algorithms, trajectory generation for motion profiling, computer vision, and object-oriented design including S.O.L.I.D. principles.
* Taught Java programming, web development, and computer security to middle schoolers in team summer camps.
`)

const Experience: React.FC = () => (
	<Box pt={3} pb={6}>
		<Typography
			variant="h1"
			component="h2"
			fontFamily="'Bebas Neue', cursive"
			fontSize={{ xs: '6em', sm: '6.5em', md: '7em' }}
			textAlign="center"
		>
			My Experience
		</Typography>
		<Box px={1} pt={2} pb={3} fontFamily="'Fira Code', monospace" textAlign="center">
			Talk is cheap. Show me the code. <span style={{ opacity: 0.75 }}>// Linus Torvalds</span>
		</Box>
		<Container maxWidth="md">
			<Paper sx={{ p: { xs: 2, sm: 3, md: 4 }, bgcolor: '#18191d' }}>
				<Stack direction="column" spacing={5}>
					<Experiences title="Professional" experiences={professional} />
					<Experiences title="Extracurricular" experiences={extracurricular} />
				</Stack>
			</Paper>
		</Container>
	</Box>
)

const Experiences: React.FC<{ title: string; experiences: ReturnType<typeof experienceFromRaw> }> = ({
	title,
	experiences,
}) => {
	const theme = useTheme()
	const matches = useMediaQuery(theme.breakpoints.up('sm'))

	return (
		<Box>
			<Box mb={1}>
				<Chip label={title} />
			</Box>
			{experiences.map((e, index) => (
				<Box key={index} mb={3}>
					<Typography variant="h5" gutterBottom>
						{e.title}
						{e.subtitle ? ' ' : null}
						{e.subtitle ? (
							<Box component="span" fontWeight={300} fontSize="0.65em" sx={{ verticalAlign: 'middle' }}>
								({e.subtitle}
							</Box>
						) : null}
					</Typography>
					<Box mb={1}>
						<Typography variant="body2">
							<Link color={theme.palette.primary.light} href={e.url} target="_blank">
								{e.url}
							</Link>
							{' - '}
							{e.description}
						</Typography>
					</Box>
					<Stack direction="row" spacing={2}>
						<Typography variant={matches ? 'h6' : 'subtitle1'}>{e.role}</Typography>
						<Box flex={1} />
						<Typography variant={matches ? 'subtitle1' : 'subtitle2'}>{e.time}</Typography>
					</Stack>
					{e.blocks.map((b, index) =>
						typeof b === 'string' ? (
							<Typography key={index} variant="subtitle1" textAlign="right">
								{b}
							</Typography>
						) : (
							<List key={index} dense>
								{b.map((v, index) => (
									<ListItem key={index} disableGutters={!matches}>
										<ListItemIcon>
											<CheckCircleIcon sx={{ fontSize: '0.75rem' }} />
										</ListItemIcon>
										<ListItemText>{v}</ListItemText>
									</ListItem>
								))}
							</List>
						)
					)}
				</Box>
			))}
		</Box>
	)
}

export default Experience
