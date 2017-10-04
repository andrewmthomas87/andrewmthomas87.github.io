import * as React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

import './component.less'

interface IProps extends React.Props<void> { }

class Work extends React.Component<IProps, {}> {

	public render(): JSX.Element {
		return (
			<section id='work'>
				<h1 className='title'>Work</h1>
				<div className='work'>
					<div>
						<h4>Left Hand Robotics</h4>
						<h2>Fullstack Developer</h2>
						<h5>May 2017 - Present</h5>
					</div>
					<div>
						<h4>Workday</h4>
						<h2>GW Software Engineering Intern</h2>
						<h5>June 2015 - August 2016</h5>
					</div>
					<div>
						<h4>Up-A-Creek Robotics</h4>
						<h2>Software Lead</h2>
						<h5>May 2016 - July 2017</h5>
					</div>
					<div>
						<h4>Up-A-Creek Robotics</h4>
						<h2>Robot Driver</h2>
						<h5>January 2016 - July 2017</h5>
					</div>
					<div>
						<h4>Up-A-Creek Robotics</h4>
						<h2>Strategy Lead</h2>
						<h5>January 2015 - May 2016</h5>
					</div>
				</div>
				<p>To see what I have done in these positions, check out <Link to='/projects'>my projects</Link>.</p>
			</section>
		)
	}

}

export default Work
