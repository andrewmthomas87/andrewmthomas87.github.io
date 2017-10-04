import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import './component.less'

interface IProps extends React.Props<void> { }

class Contact extends React.Component<IProps, {}> {

	public render(): JSX.Element {
		return (
			<section id='contact'>
				<h1 className='title'>Contact</h1>
				<div className='contact'>
					<div>
						<h4>Email</h4>
						<h2><a target='_top' href='mailto:andrewmthomas87@gmail.com'>andrewmthomas87@gmail.com</a></h2>
					</div>
					<div>
						<h4>Phone</h4>
						<h2>(303) 598-9467</h2>
					</div>
					<div>
						<h4>Facebook</h4>
						<h2><a target='_blank' href='https://www.facebook.com/andrewmthomas87'>andrewmthomas87</a></h2>
					</div>
					<div>
						<h4>Github</h4>
						<h2><a target='_blank' href='https://github.com/andrewmthomas87'>andrewmthomas87</a></h2>
					</div>
				</div>
				<p>I'd also love to chat over coffee, if you are in the area.</p>
			</section>
		)
	}

}

export default Contact
