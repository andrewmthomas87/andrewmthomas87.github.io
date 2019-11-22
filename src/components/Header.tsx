import * as React from 'react'

import s from './header.less'

function Header(): React.ReactElement {
	return (
		<section className={s.header}>
			<div className={s.background}>
				<h1 className={s.title}>Andrew<br />Thomas</h1>
			</div>
		</section>
	)
}

export default Header
