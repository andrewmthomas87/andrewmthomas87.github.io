import * as React from 'react'
import * as MediaQuery from 'react-responsive'

import ToggleableNav from './ToggleableNav'

import './component.less'

interface IProps extends React.Props<void> { }

const Nav: React.StatelessComponent<IProps> = (): JSX.Element => (
	<nav>
		<span className='logo'>AT</span>
		<MediaQuery maxWidth={630}>
			<ToggleableNav>
				<a href='/' className='active'>Home</a>
				<a href='/about'>About</a>
				<a href='/skills'>Skills</a>
				<a href='/projects'>Projects</a>
				<a href='/work'>Work</a>
				<a href='/contact'>Contact</a>
			</ToggleableNav>
		</MediaQuery>
		<MediaQuery minWidth={631}>
			<div>
				<a href='/' className='active'>Home</a>
				<a href='/about'>About</a>
				<a href='/skills'>Skills</a>
				<a href='/projects'>Projects</a>
				<a href='/work'>Work</a>
				<a href='/contact'>Contact</a>
			</div>
		</MediaQuery>
	</nav>
)

export default Nav
