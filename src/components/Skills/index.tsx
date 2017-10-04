import * as React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

import './component.less'

interface IProps extends RouteComponentProps<void> { }

class Skills extends React.Component<IProps, {}> {

	public render(): JSX.Element {
		return (
			<section id='skills'>
				<h1 className='title'>Skills</h1>
				<blockquote>
					The best way to predict the future is to invent it.
					<br />
					<span className='author'>Alan Kay</span>
				</blockquote>
				<p>I have a passion for application development. From polishing UI, to spec'ing out a network protocol, to doing too much with one line of SQL, I work at every level of the stack.</p>
				<div className='container'>
					<div className='languages'>
						<h3>Languages</h3>
						<div className='typescript'>
							<i className='devicon-typescript-plain' />
							<h5>TypeScript</h5>
						</div>
						<div className='javascript'>
							<i className='devicon-javascript-plain' />
							<h5>JavaScript</h5>
						</div>
						<div className='html'>
							<i className='devicon-html5-plain' />
							<h5>HTML</h5>
						</div>
						<div className='css'>
							<i className='devicon-css3-plain' />
							<h5>CSS</h5>
						</div>
						<div className='go'>
							<i className='devicon-go-plain' />
							<h5>Go</h5>
						</div>
						<div className='java'>
							<i className='devicon-java-plain' />
							<h5>Java</h5>
						</div>
						<div className='python'>
							<i className='devicon-python-plain' />
							<h5>Python</h5>
						</div>
						<div className='sql'>
							<div />
							<h5>SQL</h5>
						</div>
						<div className='swift'>
							<i className='devicon-swift-plain' />
							<h5>Swift</h5>
						</div>
						<div className='php'>
							<i className='devicon-php-plain' />
							<h5>PHP</h5>
						</div>
						<div className='c'>
							<i className='devicon-c-plain' />
							<h5>C</h5>
						</div>
						<div className='cplusplus'>
							<i className='devicon-cplusplus-plain' />
							<h5>C++</h5>
						</div>
					</div>
				</div>
				<h3>Technologies</h3>
				<div className='container large'>
					<div className='sections'>
						<div>
							<h4><span>Front-end</span></h4>
							<div className='list'>
								<div><i className='devicon-typescript-plain' /><span>TypeScript</span></div>
								<div><i className='devicon-javascript-plain' /><span>JavaScript</span></div>
								<div><i className='devicon-react-plain' /><span>React</span></div>
								<div><span className='empty' /><span>Redux</span></div>
								<div><i className='devicon-angularjs-plain' /><span>Angular 2/4</span></div>
								<div><span className='empty' /><span>Cycle.js</span></div>
								<div><span className='empty' /><span>MobX</span></div>
								<div><i className='devicon-html5-plain' /><span>HTML</span></div>
								<div><i className='devicon-css3-plain' /><span>CSS</span></div>
								<div><i className='devicon-less-plain-wordmark' /><span>LESS</span></div>
							</div>
						</div>
						<div>
							<h4><span>Back-end</span></h4>
							<div className='list'>
								<div><i className='devicon-typescript-plain' /><span>TypeScript</span></div>
								<div><i className='devicon-javascript-plain' /><span>JavaScript</span></div>
								<div><i className='devicon-nodejs-plain' /><span>Node.js</span></div>
								<div><i className='devicon-go-plain' /><span>Go</span></div>
								<div><i className='devicon-java-plain' /><span>Java</span></div>
								<div><i className='devicon-python-plain' /><span>Python</span></div>
								<div><i className='devicon-php-plain' /><span>PHP</span></div>
								<div><div className='sql' /><span>SQL</span></div>
								<div><i className='devicon-mysql-plain' /><span>MySQL</span></div>
								<div><span className='empty' /><span>RabbitMQ</span></div>
							</div>
						</div>
						<div>
							<h4><span>Production</span></h4>
							<div className='list'>
								<div><i className='devicon-amazonwebservices-original' /><span>AWS</span></div>
								<div><i className='devicon-docker-plain' /><span>Docker</span></div>
								<div><i className='devicon-nginx-original' /><span>NGINX</span></div>
								<div><i className='devicon-zend-plain' /><span>Zend Server</span></div>
								<div><i className='devicon-gradle-plain' /><span>Gradle</span></div>
								<div><i className='devicon-webpack-plain' /><span>Webpack</span></div>
								<div><i className='devicon-gulp-plain' /><span>Gulp</span></div>
								<div><i className='devicon-babel-plain' /><span>Babel</span></div>
								<div><i className='devicon-mocha-plain' /><span>Mocha</span></div>
								<div><i className='devicon-travis-plain' /><span>Travis CI</span></div>
							</div>
						</div>
						<div>
							<h4><span>Robotics</span></h4>
							<div className='list'>
								<div><i className='devicon-java-plain' /><span>Java</span></div>
								<div><i className='devicon-python-plain' /><span>Python</span></div>
								<div><span className='empty' /><span>OpenCV</span></div>
								<div><span className='empty collapsible' /><span>Video streaming</span></div>
								<div><span className='empty collapsible' /><span>Control systems</span></div>
								<div><span className='empty collapsible' /><span>Motion profiling</span></div>
							</div>
						</div>
						<div>
							<h4><span>Team</span></h4>
							<div className='list'>
								<div><i className='devicon-git-plain' /><span>Git</span></div>
								<div><i className='devicon-github-plain' /><span>Github</span></div>
								<div><span className='empty' /><span>Jira</span></div>
							</div>
						</div>
						<div>
							<h4><span>Network</span></h4>
							<div className='list'>
								<div><span>WebSocket</span></div>
								<div><span>AJAX</span></div>
								<div><span>RESTful API</span></div>
								<div><span>JSON</span></div>
								<div><span>RabbitMQ</span></div>
							</div>
						</div>
					</div>
				</div>
				<p>To see how I have applied these skills, check out <Link to='/projects'>my projects</Link>.</p>
				<span className='notice'>This is not an exhaustive list but gives an indication of the languages and technologies with which I am most familiar.</span>
			</section>
		)
	}

}

export default Skills
