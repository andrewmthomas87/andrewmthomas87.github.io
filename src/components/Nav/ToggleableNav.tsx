import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'
import { NavLink } from 'react-router-dom'

interface IProps extends React.Props<void> { }

@observer
class ToggleableNav extends React.Component<IProps, {}> {

	@observable private _$active: boolean = false

	public render(): JSX.Element {
		const active: boolean = this._$active

		return (
			<div className='toggleable'>
				{active ? (
					<div className='menu'>
						<NavLink to='/' activeClassName='active' exact={true} onClick={this._onClick}>Home</NavLink>
						<NavLink to='/skills' activeClassName='active' onClick={this._onClick}>Skills</NavLink>
						<NavLink to='/about' activeClassName='active' onClick={this._onClick}>About</NavLink>
						<NavLink to='/projects' activeClassName='active' onClick={this._onClick}>Projects</NavLink>
						<NavLink to='/work' activeClassName='active' onClick={this._onClick}>Work</NavLink>
						<NavLink to='/contact' activeClassName='active' onClick={this._onClick}>Contact</NavLink>
					</div>
				) : null}
				<a href='#' id='toggle' className={active ? 'active' : ''} onClick={this._onToggle}>T</a>
			</div>
		)
	}

	@action
	private _onClick = () => {
		this._$active = !this._$active
	}

	@action
	private _onToggle = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
		event.preventDefault()

		this._$active = !this._$active
	}

}

export default ToggleableNav
