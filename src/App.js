import React, { Component } from 'react';

import Top from './components/Top';
import Content from './components/Content';

class App extends Component {
	constructor(props) {
		super(props);
    }
	componentDidMount() {
    }
	render() {
		return (
			<div >
				⑥redux編
                <div className="main">
                    <div className="container">
                        <Top />
                        <Content />
                    </div>
                </div>
			</div>
		);
	}
}

export default App;