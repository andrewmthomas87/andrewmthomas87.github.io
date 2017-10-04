import * as React from 'react'
import { Link } from 'react-router-dom'
import * as MediaQuery from 'react-responsive'

const ts: string = require('./code/ts.txt')
const less: string = require('./code/less.txt')
const sql: string = require('./code/sql.txt')
const java: string = require('./code/java.txt')
const robot: string = require('./code/robot.txt')
const python: string = require('./code/python.txt')

interface IProps extends React.Props<void> { }

const Skills: React.StatelessComponent<IProps> = (): JSX.Element => (
	<section id='home-skills'>
		<div>
			<div>
				<div className='large' dangerouslySetInnerHTML={{ __html: ts }} />
				<div dangerouslySetInnerHTML={{ __html: less }} />
			</div>
			<h3><span className='fitty'>Front-end</span></h3>
		</div>
		<div>
			<div>
				<div className='large' dangerouslySetInnerHTML={{ __html: java }} />
				<div dangerouslySetInnerHTML={{ __html: sql }} />
			</div>
			<h3><span className='fitty'>Back-end</span></h3>
		</div>
		<div className='last'>
			<div>
				<div className='large' dangerouslySetInnerHTML={{ __html: robot }} />
				<div dangerouslySetInnerHTML={{ __html: python }} />
			</div>
			<h3><span className='fitty'>Robotics</span></h3>
		</div>
		<Link to='/skills' className='block-button'>Learn more about my skills</Link>
		<section>
			<div />
			<h3><span className='fitty'>Adventurer</span></h3>
		</section>
	</section >
)

export default Skills
