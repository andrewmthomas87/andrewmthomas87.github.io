import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import './component.less'

interface IProps extends RouteComponentProps<void> { }

class About extends React.Component<IProps, {}> {

	public render(): JSX.Element {
		return (
			<section id='about'>
				<h1 className='title'>About</h1>
				<img id='me' src={require('../../assets/1.jpg')} />
				<br />
				<blockquote>
					Those who can imagine anything, can create the impossible.
					<br />
					<span className='author'>Alan Turing</span>
				</blockquote>
				<p></p>
			</section>
		)
	}

}

export default About
