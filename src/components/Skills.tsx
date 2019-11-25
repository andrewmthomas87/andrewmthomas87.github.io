import * as React from 'react'

import s from './skills.less'

function Skills(): React.ReactElement {
	return (
		<section className={s.skills}>
			<h2 className={s.title}>My skills</h2>
			<div className={s.container}>
				<div className={s.block}>
					<h3 className={s.header}>Front-end</h3>
					<h3 className={s.subheader}>Languages</h3>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>TypeScript</div>
						<div className={s.item}>JavaScript</div>
						<div className={[s.item, s.highlight].join(' ')}>Dart</div>
						<div className={s.item}>HTML</div>
						<div className={s.item}>CSS</div>
						<div className={[s.item, s.highlight].join(' ')}>LESS</div>
					</div>
					<h3 className={s.subheader}>Libraries & frameworks</h3>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>React</div>
						<div className={s.item}>Vue.js</div>
						<div className={[s.item, s.highlight].join(' ')}>Flutter</div>
						<div className={s.item}>React Native</div>
						<div className={[s.item, s.highlight].join(' ')}>MobX</div>
						<div className={[s.item, s.highlight].join(' ')}>RxJS</div>
						<div className={s.item}>Redux</div>
						<div className={[s.item, s.highlight].join(' ')}>InversifyJS</div>
						<div className={[s.item, s.highlight].join(' ')}>GraphQL</div>
						<div className={s.item}>axios</div>
						<div className={s.item}>Google Maps API</div>
					</div>
					<h3 className={s.subheader}>Network</h3>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>WebSocket</div>
						<div className={[s.item, s.highlight].join(' ')}>AJAX</div>
						<div className={[s.item, s.highlight].join(' ')}>JSON</div>
						<div className={s.item}>MQTT</div>
						<div className={s.item}>socket.io</div>
					</div>
					<h3 className={s.subheader}>Tools</h3>
					<div className={s.items}>
						<div className={[s.item, s.highlight].join(' ')}>webpack</div>
						<div className={s.item}>Gulp</div>
						<div className={[s.item, s.highlight].join(' ')}>npm</div>
						<div className={s.item}>Babel</div>
						<div className={[s.item, s.highlight].join(' ')}>TypeScript compiler</div>
					</div>
					<h3 className={s.subheader}>Testing & CI</h3>
					<div className={s.items}>
						<div className={s.item}>Mocha</div>
						<div className={[s.item, s.highlight].join(' ')}>Jest</div>
						<div className={[s.item, s.highlight].join(' ')}>Selenium</div>
						<div className={s.item}>Travis CI</div>
					</div>
					<h3 className={s.subheader}>Patterns</h3>
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
					<h3 className={s.subheader}>Languages</h3>
				</div>
				<div className={s.block}>
					<h3 className={s.header}>Robotics</h3>
					<h3 className={s.subheader}>Languages</h3>
				</div>
				<div className={s.block}>
					<h3 className={s.header}>Team</h3>
					<h3 className={s.subheader}>Source control</h3>
				</div>
			</div>
		</section>
	)
}

export default Skills
