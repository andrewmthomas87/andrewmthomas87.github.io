import * as React from 'react'

import s from './app.less'

import Header from './Header'
import About from './About'
import Skills from './Skills'

function App(): React.ReactElement {
	return (
		<section className={s.app}>
			<Header />
			<About />
			<Skills />
		</section>
	)
}

export default App
