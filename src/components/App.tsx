import * as React from 'react'

import s from './app.less'

import Header from './Header'
import About from './About'

function App(): React.ReactElement {
	return (
		<section className={s.app}>
			<Header />
			<About />
		</section>
	)
}

export default App
