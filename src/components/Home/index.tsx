import fitty from 'fitty'
import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Skills from './Skills'
import About from './About'

import './component.less'

interface IProps extends RouteComponentProps<void> { }

class Home extends React.Component<IProps, {}> {

	public componentDidMount() {
		fitty('section#home .fitty', { multiline: true })
	}

	public render(): JSX.Element {
		return (
			<section id='home'>
				<div id='background' />
				<section id='title'>
					<h1><span className='fitty'>Andrew&nbsp;&nbsp;Thomas</span></h1>
				</section>
				<section id='introduction'>
					<h2><span className='fitty'>Fullstack developer</span></h2>
					<br />
					<h3><span className='fitty'>Photographer <span>&middot;</span> Entrepreneur <span>&middot;</span> College student</span></h3>
				</section>
				<section id='spacer'>
					<h3><span className='fitty'>Occasional Stargazer</span></h3>
				</section>
				<Skills />
				<About />
			</section>
		)
	}

}

export default Home
