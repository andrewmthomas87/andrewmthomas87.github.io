import * as React from 'react'
import { NavLink } from 'react-router-dom'
import * as MediaQuery from 'react-responsive'

import ToggleableNav from './ToggleableNav'

import './component.less'

interface IProps extends React.Props<void> { }

const Nav: React.StatelessComponent<IProps> = (): JSX.Element => (
	<nav>
		<span className='logo'>AT</span>
		<MediaQuery maxWidth={630}>
			<ToggleableNav />
		</MediaQuery>
		<MediaQuery minWidth={631}>
			<div>
				<NavLink to='/' activeClassName='active' exact={true}>Home</NavLink>
				<NavLink to='/skills' activeClassName='active'>Skills</NavLink>
				<NavLink to='/about' activeClassName='active'>About</NavLink>
				<NavLink to='/projects' activeClassName='active'>Projects</NavLink>
				<NavLink to='/work' activeClassName='active'>Work</NavLink>
				<NavLink to='/contact' activeClassName='active'>Contact</NavLink>
			</div>
		</MediaQuery>
	</nav>
)

export default Nav
