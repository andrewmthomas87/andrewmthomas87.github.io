import * as React from 'react'
import { Link } from 'react-router-dom'
import * as MediaQuery from 'react-responsive'

interface IProps extends React.Props<void> { }

const About: React.StatelessComponent<IProps> = (): JSX.Element => (
	<section id='home-about'>
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
		<Link to='/about' className='block-button'>Learn more about me</Link>
	</section>
)

export default About
