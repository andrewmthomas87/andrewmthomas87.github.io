import * as React from 'react'

import s from './app.less'

import Resume from './Resume'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'

function App(): React.ReactElement {
	return (
		<>
			<Resume />
			<section className={s.app}>
				<Header />
				<About />
				<Skills />
				<Experience />
			</section>
		</>
	)
}

export default App
