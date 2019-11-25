import * as React from 'react'

import s from './skills.less'

function Skills(): React.ReactElement {
	return (
		<section className={s.skills}>
			<h2 className={s.title}>My skills</h2>
			<div className={s.container}>
				<div className={s.block}>
					<h3 className={s.header}># front-end</h3>
					<h4 className={s.subheader}># languages</h4>
					<div className={s.item}>- TypeScript, JavaScript, HTML, CSS, LESS</div>
				</div>
				<div className={s.block}>
					<h3 className={s.header}># back-end</h3>
				</div>
				<div className={s.block}>
					<h3 className={s.header}># robotics</h3>
				</div>
				<div className={s.block}>
					<h3 className={s.header}># team</h3>
				</div>
			</div>
		</section>
	)
}

export default Skills
