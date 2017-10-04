import * as React from 'react'
import { withRouter } from 'react-router-dom'

interface IProps extends React.Props<void> { }

class ScrollToTop extends React.Component<IProps, {}> {

	public componentDidUpdate(previousProps: any) {
		if ((this.props as any).location !== previousProps.location) {
			// document.body.scrollTo(0, 0)
		}
	}

	public render(): JSX.Element {
		return <div>{this.props.children}</div>
	}

}

export default withRouter(ScrollToTop)
