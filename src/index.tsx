import { useStrict } from 'mobx'

useStrict(true)

import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ScrollToTop from 'components/ScrollToTop'

import Nav from 'components/Nav'
import Home from 'components/Home'
import Skills from 'components/Skills'
import About from 'components/About'
import Projects from 'components/Projects'
import Work from 'components/Work'
import Contact from 'components/Contact'
import NotFound from 'components/NotFound'

import './app.less'

render((
	<BrowserRouter>
		<ScrollToTop>
			<Nav />
			<Switch>
				<Route path='/' exact={true} component={Home} />
				<Route path='/skills' component={Skills} />
				<Route path='/about' component={About} />
				<Route path='/projects' component={Projects} />
				<Route path='/work' component={Work} />
				<Route path='/contact' component={Contact} />
				<Route component={NotFound} />
			</Switch>
		</ScrollToTop>
	</BrowserRouter>
), document.querySelector('div#root'))
