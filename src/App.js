import React, { Component } from 'react';

import * as results from './common/data/results';
import Top from './components/Top';
import Content from './components/Content';

class App extends Component {
	constructor(props) {
        const hoge = results.phpJson();
        // console.log(hoge);
		super(props);
    }
	componentDidMount() {
    }
    jsonDidMount(){
		// const hoge = results.phpJson();
        // console.log(hoge);
    }
	render() {
		return (
			<div >
				⑦基礎確認編
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