import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import * as React from 'react'

interface IProps extends React.Props<void> { }

@observer
class ToggleableNav extends React.Component<IProps, {}> {

	@observable private _$active: boolean = false

	public render(): JSX.Element {
		const active: boolean = this._$active

		return (
			<div className='toggleable'>
				{active ? <div className='menu'>{this.props.children}</div> : null}
				<a href='#' id='toggle' className={active ? 'active' : ''} onClick={this._onToggle}>T</a>
			</div>
		)
	}

	@action
	private _onToggle = (event: React.SyntheticEvent<HTMLAnchorElement>) => {
		event.preventDefault()

		this._$active = !this._$active
	}

}

export default ToggleableNav
