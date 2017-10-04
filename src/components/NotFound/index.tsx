import fitty from 'fitty'
import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import './component.less'

interface IProps extends RouteComponentProps<void> { }

class NotFound extends React.Component<IProps, {}> {

	public componentDidMount() {
		fitty('section#not-found .fitty')
	}

	public render(): JSX.Element {
		return (
			<section id='not-found'>
				<h1><span className='fitty'>404</span></h1>
				<h2><span className='fitty'>Page not found</span></h2>
			</section>
		)
	}

}

export default NotFound
