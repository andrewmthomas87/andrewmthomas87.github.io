import * as React from 'react'
import fitty from 'fitty'
import * as MediaQuery from 'react-responsive'

import './component.less'

interface IProps extends React.Props<void> { }

class Home extends React.Component<IProps, {}> {

	public componentDidMount() {
		fitty('section#home .fitty', { multiline: true })
	}

	public render(): JSX.Element {
		return (
			<section id='home'>
				<div id='background' />
				<section id='title'>
					<h1 className='fitty'><span>Andrew</span><span>Thomas</span></h1>
				</section>
				<section id='introduction'>
					<h2><span className='fitty'>Fullstack developer</span></h2>
					<br />
					<h3><span className='fitty'>Photographer <span>&middot;</span> Entrepreneur <span>&middot;</span> College student</span></h3>
				</section>
				<section id='spacer'>
					<h4><span className='fitty'>Occasional Stargazer</span></h4>
				</section>
				<section id='about'>
					<div id='pictures'>
						<MediaQuery maxWidth={920}>
							{(matches: boolean) => matches ? (
								<div className='width-2'>
									<div className='image-1'><div className='pomegranate'><span className='fitty'>Me</span></div></div>
									<div className='image-2'><div className='pumpkin'><span className='fitty'>Photography</span></div></div>
									<div className='image-3 large'><div className='nephritis'><span className='fitty'>Backpacking</span></div></div>
									<div className='image-7 large'><div className='green-sea'><span className='fitty'>Robotics</span></div></div>
									<div className='image-4'><div className='midnight-blue'><span className='fitty'>Hockey</span></div></div>
									<div className='image-6'><div className='green-sea'><span className='fitty'>Robotics</span></div></div>
									<div className='image-5 large'><div className='belize-hole'><span className='fitty'>Colorado</span></div></div>
									<div className='image-8 large'><div className='wisteria'><span className='fitty'>Snowboarding</span></div></div>
								</div>
							) : (
									<div className='width-3'>
										<div className='image-1'><div className='pomegranate'><span className='fitty'>Me</span></div></div>
										<div className='image-3 large'><div className='nephritis'><span className='fitty'>Backpacking</span></div></div>
										<div className='image-7 large'><div className='green-sea'><span className='fitty'>Robotics</span></div></div>
										<div className='image-2'><div className='pumpkin'><span className='fitty'>Photography</span></div></div>
										<div className='image-4'><div className='midnight-blue'><span className='fitty'>Hockey</span></div></div>
										<div className='image-5 large'><div className='belize-hole'><span className='fitty'>Colorado</span></div></div>
										<div className='image-8 large'><div className='wisteria'><span className='fitty'>Snowboarding</span></div></div>
										<div className='image-6'><div className='green-sea'><span className='fitty'>Robotics</span></div></div>
									</div>
								)}
						</MediaQuery>
					</div>
					<a href='/about' className='block-button'>Learn more about me</a>
				</section>
			</section>
		)
	}

}

export default Home
