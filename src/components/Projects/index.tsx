import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import './component.less'

interface IProps extends RouteComponentProps<void> { }

class Projects extends React.Component<IProps, {}> {

	public render(): JSX.Element {
		return (
			<section id='projects'>
				<h1 className='title'>Projects</h1>
				<blockquote>
					Talk is cheap. Show me the code.
					<br />
					<span className='author'>Linus Torvalds</span>
				</blockquote>
				<div className='projects'>
					<div>
						<h5>Left Hand Robotics</h5>
						<h2>Robot Operation Center</h2>
						<div className='tags'>
							<span>WebSocket</span>
							<span>AJAX</span>
							<span>JSON</span>
						</div>
						<br />
						<h6>Web client</h6>
						<div className='tags'>
							<span>TypeScript</span>
							<span>React</span>
							<span>MobX</span>
							<span>HTML</span>
							<span>LESS</span>
							<span>Webpack</span>
							<span>Mocha</span>
							<span>Google Maps</span>
						</div>
						<div className='description'>
							<div>A complex, single-page application (SPA) supporting multiple user roles.</div>
							This application included many dynamic data viewing and management interfaces and live updating dashboards.
							I developed the application from the ground up.
							This involved designing and developing application architecture, decisions about foundational technologies, UI and UX design, custom 3D graphics, embedding maps, and setting up a testing framework.
						</div>
						<br />
						<h6>Server</h6>
						<div className='tags'>
							<span>Java</span>
							<span>SQL</span>
							<span>MySQL</span>
							<span>RabbitMQ</span>
							<span>AWS</span>
							<span>NGINX</span>
							<span>Gradle</span>
						</div>
						<div className='description'>
							<div>A central server responsible for handling several clients and hardware devices.</div>
							I worked closely with a small team to implement a custom microservice-esque infrastructure.
							I developed an automatic deserialization and message processing system for handling socket communication, token-based authentication, and many application endpoints.
							I also helped set up the deploy process/production environment using Amazon Web Services and NGINX.
						</div>
					</div>
					<div>
						<h5>Left Hand Robotics</h5>
						<h2>Path Collection Tool</h2>
						<div className='tags'>
							<span>WebSocket</span>
							<span>JSON</span>
							<span>Raspberry Pi</span>
							<span>Embedded application</span>
						</div>
						<br />
						<h6>Web client</h6>
						<div className='tags'>
							<span>TypeScript</span>
							<span>React</span>
							<span>MobX</span>
							<span>HTML</span>
							<span>LESS</span>
							<span>Webpack</span>
							<span>Mocha</span>
							<span>WebGL</span>
						</div>
						<div className='description'>
							<div>An embedded application running on a Raspberry Pi and custom hardware allowing a user to create a virtual path using GPS data and an editing interface.</div>
							I developed this application from the ground up.
							The application involved complex UI and live-updating data visualizations.
							The application had to be intuitive and simple for a user to use on a small touch screen while operating a path collection tool (a physical piece of hardware).
						</div>
						<br />
						<h6>Server</h6>
						<div className='tags'>
							<span>Python</span>
							<span>Autobahn</span>
							<span>asyncio</span>
							<span>Twisted</span>
						</div>
						<div className='description'>
							<div>An embedded local server responsible for providing sensor data to the client, recording path files, and interacting with the Robot Operation Center.</div>
							I helped another developer set up a WebSocket server using Autobahn for Python and design an effective server architecture.
						</div>
					</div>
					<div>
						<h5>Workday</h5>
						<h2>Workdocs web client</h2>
						<div className='tags'>
							<span>WebSocket</span>
							<span>AJAX</span>
							<span>JSON</span>
							<span>TypeScript</span>
							<span>React</span>
							<span>Redux</span>
							<span>HTML</span>
							<span>LESS</span>
							<span>Webpack</span>
							<span>Operational Transformation</span>
						</div>
						<div className='description'>
							<div>A rich document editing application with real-time collaboration capabilities.</div>
							I worked closely with a senior developer to develop a minimum viable product (MVP) on a fast-paced timeline.
							I developed the web client while he developed the server.
							To support real-time collaborative editing, I implemented Operational Transformation algorithms.
							We demoed the MVP to product managers and developers to provide feedback for future product development.
						</div>
					</div>
					<div>
						<h5>Workday</h5>
						<h2>Worksheets web client</h2>
						<div className='tags'>
							<span>WebSocket</span>
							<span>AJAX</span>
							<span>JSON</span>
							<span>JavaScript</span>
							<span>Angular 1</span>
							<span>RxJS</span>
							<span>Jade</span>
							<span>LESS</span>
							<span>Webpack</span>
							<span>Selenium</span>
							<span>Travis CI</span>
							<span>Jira</span>
						</div>
						<div className='description'>
							<div>A cloud-based, collaborative spreadsheet application built into the core of Workday's technology platform.</div>
							I worked with a small team of front-end developers to transition the application, originally stand-alone, into the Workday ecosystem.
							I rewrote important foundational code written in CoffeeScript as EcmaScript 6, worked closely with another developer to rehaul a complex data importing interface, and fixed a large number of bugs.
							I frequently communicated with server developers to implement fullstack refactors to integrate the product into the Workday ecosystem.
						</div>
					</div>
					<div>
						<h5>Up-A-Creek Robotics</h5>
						<h2>2017 Robot Code</h2>
						<div className='tags'>
							<span>FRC</span>
							<span>Java</span>
							<span>Python</span>
							<span>OpenCV</span>
							<span>Control systems</span>
							<span>Motion profiling</span>
						</div>
						<div className='description'>
							<div>A codebase to effectively control Up-A-Creek Robotic's robot Upstream for the FIRST Robotics Competition 2017 game STEAMWORKS.</div>
							As Software Lead, it was my responsibility to develop a codebase that could effectively control the robot while also teaching other students.
							I developed code to control the robot both autonomously and with input from humans, as each FRC game requires both.
							This involved developing a complex state management system, control systems, motion profiling, vision targeting code, and network communication.
							This code allowed our robot to perform in the highest performance bracket and win the Indiana Robotics Invitational, one of the most competitive events.
							<br />
							<br />
							<a target='_blank' href='https://youtu.be/wLutraKG-AY'>Robot reveal video</a>
							<br />
							<a target='_blank' href='https://youtu.be/KTKqqWTXN2M'>Competition match video (Team 1619)</a>
							<br />
							<a target='_blank' href='https://youtu.be/UvIcnhLULSs'>Indiana Robotics Invitational recap video</a>
							<br />
							<a target='_blank' href='https://youtu.be/EMiNmJW7enI'>FIRST Robotics Competition STEAMWORKS Game Animation</a>
						</div>
					</div>
					<div>
						<h5>Up-A-Creek Robotics</h5>
						<h2>2016 Robot Code</h2>
						<div className='tags'>
							<span>FRC</span>
							<span>Java</span>
							<span>Python</span>
							<span>OpenCV</span>
							<span>Control systems</span>
							<span>Motion profiling</span>
						</div>
						<div className='description'>
							<div>A codebase to effectively control Up-A-Creek Robotic's robot Ballista for the FIRST Robotics Competition 2016 game STRONGHOLD.</div>
							I worked closely with other team members to develop the 2016 codebase.
							I played an important role in designing a generic framework that allowed the team to develop more consistent, functional, and testable robot code at a faster pace.
							I developed, tested, and tuned a large number of complex autonomous routines that set our robot apart in competition.
							<br />
							<br />
							<a target='_blank' href='https://youtu.be/nlOlae2ljKI'>Robot reveal video</a>
							<br />
							<a target='_blank' href='https://youtu.be/M6zBb5dKMio'>Competition match video (Team 1619)</a>
						</div>
					</div>
					<div>
						<h5>Up-A-Creek Robotics</h5>
						<h2>2015 Scouting Application</h2>
						<div className='tags'>
							<span>FRC</span>
							<span>AJAX</span>
							<span>JSON</span>
							<span>JavaScript</span>
							<span>JQuery</span>
							<span>HTML</span>
							<span>CSS</span>
						</div>
					</div>
				</div>
				<span className='notice'>This is not an exhaustive list, to see more check out my <a target='_blank' href='https://github.com/andrewmthomas87'>Github</a>.</span>
			</section>
		)
	}

}

export default Projects
