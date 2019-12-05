import * as React from 'react'

import s from './experience.less'

function Experience(): React.ReactElement {
	return (
		<section className={s.experience}>
			<h2 className={s.title}>My experience</h2>
			<div className={s.quote}>Talk is cheap. Show me the code. <span className={s.author}>// Linus Torvalds</span></div>
			<div className={s.block}>
				<h2 className={s.type}><span className={s.span}>Professional</span></h2>
				<div className={s.item}>
					<h3 className={s.company}>Left Hand Robotics <span className={s.small}>(startup)</span></h3>
					<h4 className={s.position}>Software Developer, Intern</h4>
					<p className={s.description}><a className={s.link} href='https://lefthandrobotics.com' target='_blank'>https://lefthandrobotics.com</a> - founded in 2016 in Longmont, Colorado, Left Hand Robotics designs commercial-class smart robots that work autonomously, allowing property managers, municipalities and contractors alike to become more efficient and do more with existing resources.</p>
					<h5 className={s.dates}>June 2019-Sept 2019</h5>
					<ul className={s.list}>
						<li className={s.listItem}>Developed storage mechanism, API, models, and data migration tooling for enhanced object storage and mutation system to solve major server bottleneck using Google Protocol Buffers.</li>
						<li className={s.listItem}>Built client-side library for reactive consumption, in-place mutation, and upload of Google Protocol Buffer objects</li>
						<li className={s.listItem}>Redesigned and redeveloped GPS path editing tools to compute mutations on the client, integrate new protocol buffer object system, and meet new customer needs.</li>
						<li className={s.listItem}>Researched message broker alternatives for publish-subscribe and remote procedure call communications between robots, mobile clients, web clients, and servers and techniques for integrating per-message authorization to enhance system security.</li>
					</ul>
					<h5 className={s.dates}>June 2018-Sept 2018</h5>
					<ul className={s.list}>
						<li className={s.listItem}>Redesigned path collection tool application and robot operations center frontend to meet new customer needs, integrating the Ant Design framework.</li>
						<li className={s.listItem}>Developed common package to share code between frontend applications.</li>
						<li className={s.listItem}>Researched area coverage and cell decomposition algorithms and implemented area coverage planning algorithm using polygon offsetting.</li>
						<li className={s.listItem}>Developed a complex GPS path editing web interface and server API for persistence and advanced mutations.</li>
						<li className={s.listItem}>Built robot monitoring page to visualize real-time robot status and progress data along programmed paths using publish-subscribe through MQTT.</li>
					</ul>
					<h5 className={s.dates}>Sept 2017-March 2018</h5>
					<ul className={s.list}>
						<li className={s.listItem}>Built API for generically fetching object model descriptors, object data, and links between objects using the Java Reflection API.</li>
						<li className={s.listItem}>Built web application for viewing and mutating data stored in server’s object system for internal use by developers and support staff.</li>
					</ul>
					<h5 className={s.dates}>May 2017-Sept 2017</h5>
					<ul className={s.list}>
						<li className={s.listItem}>Built robot operations center web application for managing inventory, collected GPS path data, robot tasks, and reports, for customer and internal support usage.</li>
						<li className={s.listItem}>Researched and evaluated potential maps services and APIs.</li>
						<li className={s.listItem}>Designed and developed registration, token-based authentication, and role-based access control (RBAC) authorization systems.</li>
						<li className={s.listItem}>Implemented internal microservice oriented message consumption and routing system on top of RabbitMQ using custom message protocol for HTTP and WebSocket requests.</li>
						<li className={s.listItem}>Discussed and researched robot path planning and control algorithms with team members.</li>
						<li className={s.listItem}>Built web application for custom path collection tool hardware utilizing Google Maps API and real-time sensor data from an embedded Python server.</li>
						<li className={s.listItem}>Evaluated potential candidates for hire and onboarded junior front-end developer.</li>
					</ul>
				</div>
				<div className={s.item}>
					<h3 className={s.company}>Workday</h3>
					<h4 className={s.position}>GW Software Engineering Intern</h4>
					<p className={s.description}><a className={s.link} href='https://www.workday.com' target='_blank'>https://www.workday.com</a> - Workday was founded on a disruptive idea: to put people at the center of enterprise software.</p>
					<h5 className={s.dates}>June 2016-Aug 2016</h5>
					<ul className={s.list}>
						<li className={s.listItem}>Worked closely with senior developer to build a real-time collaborative document editing web application.</li>
						<li className={s.listItem}>Implemented operational transformation algorithm to correctly and efficiently reconcile concurrent edits without additional coordination from the server.</li>
						<li className={s.listItem}>Demoed minimum viable product to product developers and senior management executives.</li>
					</ul>
					<h5 className={s.dates}>June 2015-Aug 2015</h5>
					<ul className={s.list}>
						<li className={s.listItem}>Refactored core service classes written in CoffeeScript to modern JavaScript (ES2015) and performed testing to ensure correctness.</li>
						<li className={s.listItem}>Collaborated with a junior developer to refactor and rework a reusable modal wizard component.</li>
						<li className={s.listItem}>Debugged and implemented fixes for user-reported bugs for bi-weekly releases.</li>
					</ul>
				</div>
				<h2 className={s.type}><span className={s.span}>Extracurricular</span></h2>
				<div className={s.item}>
					<h3 className={s.company}>Litterbox <span className={s.small}>(Northwestern startup)</span></h3>
					<h4 className={s.position}>Chief Technology Officer (CTO)</h4>
					<p className={s.description}><a className={s.link} href='http://litterboxstorage.com' target='_blank'>http://litterboxstorage.com</a> - a startup that provides affordable, convenient and secure summer storage.</p>
					<h5 className={s.dates}>Sept 2019-Current</h5>
					<ul className={s.list}>
						<li className={s.listItem}>Leading a team to build a customer-facing application and internal administration application to improve company performance and user experience.</li>
					</ul>
				</div>
				<div className={s.item}>
					<h3 className={s.company}>EPIC <span className={s.small}>(Northwestern club)</span></h3>
					<h4 className={s.position}>Tech Team Co-Director</h4>
					<p className={s.description}><a className={s.link} href='https://epicnorthwestern.com' target='_blank'>https://epicnorthwestern.com</a> - Northwestern's undergraduate entrepreneurship club.</p>
					<h5 className={s.dates}>Sept 2017-June 2018</h5>
					<ul className={s.list}>
						<li className={s.listItem}>Co-directed Tech team; held team meetings, taught software development technologies including React, Node.js, pugjs, and Flask, and oversaw and provided mentorship for student projects.</li>
						<li className={s.listItem}>Led .io, a program that aimed to provide students an experience comparable to that of working in a software-oriented startup while in a forgiving environment with an emphasis on learning (<a className={s.link} href='http://andrewt.io/.io' target='_blank'>http://andrewt.io/.io</a>).</li>
					</ul>
				</div>
				<div className={s.item}>
					<h3 className={s.company}>FRC 1619 Up-A-Creek Robotics</h3>
					<h4 className={s.position}>Software Lead</h4>
					<p className={s.description}><a className={s.link} href='https://www.team1619.org' target='_blank'>https://www.team1619.org</a> - a high school FIRST Robotics Competition team.</p>
					<h5 className={s.dates}>Jan 2014-Sept 2017</h5>
					<ul className={s.list}>
						<li className={s.listItem}>Led development of software for several competition robots, developing effective teleoperated controls and complex autonomous routines (<a className={s.link} href='https://github.com/Team1619' target='_blank'>https://github.com/Team1619</a>).</li>
						<li className={s.listItem}>Taught students of various skill levels Java programming, basic control theory, path planning algorithms, trajectory generation for motion profiling, computer vision, and object-oriented design including S.O.L.I.D. principles.</li>
						<li className={s.listItem}>Taught Java programming, web development, and computer security to middle schoolers in team-sponsored summer camps.</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Experience
