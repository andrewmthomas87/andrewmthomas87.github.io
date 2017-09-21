import { useStrict } from 'mobx'

useStrict(true)

import * as React from 'react'
import { render } from 'react-dom'

import Nav from 'components/Nav'
import Home from 'components/Home'

import './app.less'

render((
	<div>
		<Nav />
		<Home />
	</div>
), document.querySelector('div#root'))
