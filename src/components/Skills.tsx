import * as React from 'react'

import s from './skills.less'

function Skills(): React.ReactElement {
	return (
		<section className={s.skills}>
			<h2 className={s.title}>My skills</h2>
			<div className={s.legend}>
				<div className={[s.bubble, s.highlight].join(' ')} />
				<div className={s.label}>Significant experience</div>
				<div className={s.divider} />
				<div className={s.bubble} />
				<div className={s.label}>Some experience</div>
			</div>
			<div className={s.container}>
				<div className={s.block}>
					<h3 className={s.header}>Front-end</h3>
					<h4 className={s.subheader}>Languages</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>TypeScript</div>
						<div className={[s.item, s.highlight].join(' ')}>JavaScript</div>
						<div className={[s.item, s.highlight].join(' ')}>Dart</div>
						<div className={s.item}>HTML</div>
						<div className={[s.item, s.highlight].join(' ')}>CSS</div>
						<div className={[s.item, s.highlight].join(' ')}>LESS</div>
					</div>
					<h4 className={s.subheader}>Libraries & frameworks</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>React</div>
						<div className={s.item}>Vue.js</div>
						<div className={s.item}>Angular 2/4</div>
						<div className={[s.item, s.highlight].join(' ')}>Flutter</div>
						<div className={s.item}>React Native</div>
						<div className={[s.item, s.highlight].join(' ')}>MobX</div>
						<div className={[s.item, s.highlight].join(' ')}>RxJS</div>
						<div className={s.item}>Redux</div>
						<div className={[s.item, s.highlight].join(' ')}>InversifyJS</div>
						<div className={s.item}>axios</div>
						<div className={[s.item, s.highlight].join(' ')}>Google Maps API</div>
					</div>
					<h4 className={s.subheader}>Network</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>GraphQL</div>
						<div className={[s.item, s.highlight].join(' ')}>WebSocket</div>
						<div className={[s.item, s.highlight].join(' ')}>AJAX</div>
						<div className={[s.item, s.highlight].join(' ')}>JSON</div>
						<div className={s.item}>MQTT</div>
						<div className={s.item}>socket.io</div>
					</div>
					<h4 className={s.subheader}>Tools</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>webpack</div>
						<div className={s.item}>Gulp</div>
						<div className={[s.item, s.highlight].join(' ')}>npm</div>
						<div className={s.item}>Babel</div>
						<div className={[s.item, s.highlight].join(' ')}>TypeScript compiler</div>
					</div>
					<h4 className={s.subheader}>Testing & CI</h4>
					<div className={s.items}>
						<div className={s.item}>Mocha</div>
						<div className={[s.item, s.highlight].join(' ')}>Jest</div>
						<div className={[s.item, s.highlight].join(' ')}>Selenium</div>
						<div className={s.item}>Travis CI</div>
					</div>
					<h4 className={s.subheader}>Patterns</h4>
					<div className={s.list}>
						<div className={s.listItem}>Single-page application (SPA)</div>
						<div className={s.listItem}>ES2015 modules</div>
						<div className={s.listItem}>Observer pattern</div>
						<div className={s.listItem}>Dependency injection (IoC)</div>
						<div className={s.listItem}>Model generation, automated network serialization/deserialization</div>
						<div className={s.listItem}>Model-view-controller (MVC), Model-view-viewmodel (MVVM)</div>
						<div className={s.listItem}>Business Logic Component (BLoC)</div>
						<div className={s.listItem}>CSS modules</div>
						<div className={s.listItem}>Responsive web design</div>
					</div>
				</div>
				<div className={s.block}>
					<h3 className={s.header}>Back-end</h3>
					<h4 className={s.subheader}>Languages</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>Java</div>
						<div className={[s.item, s.highlight].join(' ')}>Go</div>
						<div className={[s.item, s.highlight].join(' ')}>TypeScript</div>
						<div className={[s.item, s.highlight].join(' ')}>JavaScript</div>
						<div className={s.item}>Python</div>
						<div className={s.item}>PHP</div>
						<div className={[s.item, s.highlight].join(' ')}>SQL</div>
					</div>
					<h4 className={s.subheader}>Frameworks, runtimes, databases</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>Grizzly NIO framework</div>
						<div className={[s.item, s.highlight].join(' ')}>Gin framework</div>
						<div className={[s.item, s.highlight].join(' ')}>Node.js</div>
						<div className={[s.item, s.highlight].join(' ')}>Express</div>
						<div className={s.item}>socket.io</div>
						<div className={s.item}>Flask</div>
						<div className={[s.item, s.highlight].join(' ')}>MySQL</div>
						<div className={s.item}>Redis</div>
						<div className={s.item}>Elasticsearch</div>
					</div>
					<h4 className={s.subheader}>Network</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>GraphQL</div>
						<div className={[s.item, s.highlight].join(' ')}>RabbitMQ</div>
						<div className={[s.item, s.highlight].join(' ')}>WebSocket</div>
						<div className={s.item}>RESTful API</div>
						<div className={[s.item, s.highlight].join(' ')}>JSON</div>
						<div className={s.item}>MQTT</div>
					</div>
					<h4 className={s.subheader}>Tools</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>Docker</div>
						<div className={s.item}>Gradle</div>
						<div className={[s.item, s.highlight].join(' ')}>npm</div>
						<div className={s.item}>pip</div>
						<div className={s.item}>bash</div>
					</div>
					<h4 className={s.subheader}>Production</h4>
					<div className={s.items}>
						<div className={s.item}>Amazon EC2</div>
						<div className={s.item}>AWS Lambda</div>
						<div className={s.item}>Amazon Simple Queue Service (SQS)</div>
						<div className={s.item}>NGINX</div>
						<div className={s.item}>Digital Ocean</div>
					</div>
					<h4 className={s.subheader}>Patterns</h4>
					<div className={s.list}>
						<div className={s.listItem}>Microservice Architecture pattern</div>
						<div className={s.listItem}>Publish-subscribe pattern</div>
						<div className={s.listItem}>Custom object-relational mapping (ORM) and persistance system</div>
						<div className={s.listItem}>Reflection based model introspection and data analysis system</div>
						<div className={s.listItem}>RESTful API testing</div>
						<div className={s.listItem}>JSON Web Token (JWT) authentication</div>
						<div className={s.listItem}>OAuth</div>
						<div className={s.listItem}>Role-based access control (RBAC)</div>
						<div className={s.listItem}>Data scraping</div>
					</div>
				</div>
				<div className={s.block}>
					<h3 className={s.header}>Robotics</h3>
					<h4 className={s.subheader}>Languages</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>Java</div>
						<div className={[s.item, s.highlight].join(' ')}>Python</div>
					</div>
					<h4 className={s.subheader}>Libraries</h4>
					<div className={s.items}>
						<div className={s.item}>OpenCV</div>
						<div className={[s.item, s.highlight].join(' ')}>FRC WPILib</div>
						<div className={[s.item, s.highlight].join(' ')}>Talon SRX</div>
						<div className={s.item}>NVIDIA Deep Learning SDK</div>
					</div>
					<h4 className={s.subheader}>Control systems</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>PID controller</div>
						<div className={[s.item, s.highlight].join(' ')}>Feedforward controller</div>
						<div className={s.item}>Pure pursuit controller</div>
					</div>
					<h4 className={s.subheader}>Algorithms</h4>
					<div className={s.list}>
						<div className={s.listItem}>Multi-dimensional path planning and generation</div>
						<div className={s.listItem}>Motion profiling and trajectory generation</div>
						<div className={s.listItem}>Machine-learning based motion optimization</div>
						<div className={s.listItem}>Vision-based localization</div>
						<div className={s.listItem}>Custom object classification</div>
						<div className={s.listItem}>Subsystem-based state framework</div>
						<div className={s.listItem}>Complex autonomous routine execution</div>
					</div>
				</div>
				<div className={s.block}>
					<h3 className={s.header}>Team</h3>
					<h4 className={s.subheader}>Source control</h4>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>git</div>
						<div className={[s.item, s.highlight].join(' ')}>Github</div>
					</div>
					<h4 className={s.subheader}>Tracking</h4>
					<div className={s.items}>
						<div className={s.item}>Jira</div>
						<div className={[s.item, s.highlight].join(' ')}>PivotalTracker</div>
					</div>
					<h4 className={s.subheader}>Other</h4>
					<div className={s.list}>
						<div className={s.listItem}>Agile methodology</div>
						<div className={s.listItem}>Technical interviewing and candidate assessment</div>
						<div className={s.listItem}>Technical walkthroughs/training</div>
						<div className={s.listItem}>Architecture/algorithm design</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
