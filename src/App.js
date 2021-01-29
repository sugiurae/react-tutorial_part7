import React, { Component } from 'react';

import Top from './components/Top';
import Content from './components/Content';

class App extends Component {
	constructor(props) {
		super(props);
    }
	componentDidMount() {
        // const dataMap = {
        //                     id: 1,
        //                     name: "eiji",
        //                     address: "上板橋1−21−4"
        //                 };
        // this.props.didMnt(dataMap);
        const id = 1
        const name = "eiji"
        const address = "xxxx"
        this.props.didMnt(id,name,address);
    }
    // formId
    onChangeId = (e) => {
        this.props.updateFormId(e.target.value);
    }
    // forName
    onChangeName = (e) => {
        this.props.updateFormName(e.target.value);
    }
    // formAddress
    onChangeAddress = (e) => {
        this.props.updateFormAddress(e.target.value);
    }
    // clickSaveButton
    onSaveItem = () => {
        console.log("SAVE_ID: ",this.props.conditions.id);
        console.log("SAVE_NAME: ",this.props.conditions.name);
        console.log("SAVE_NAME: ",this.props.conditions.address);
        $('#toast1').toast('show')
    }
	render() {

        // console.log(this.props.conditions.id);
        const formItem = this.props
        // formEvent
		const contentHandler = ({onChangeId, onChangeName, onChangeAddress,onSaveItem}) => ({ onChangeId, onChangeName, onChangeAddress,onSaveItem })
		return (
			<div >
				⑦基礎確認編
                <div className="main">
                    <div className="container">
                        <Top />
                        <Content formItem={formItem} {...contentHandler(this)}/>
                    </div>
                </div>
			</div>
		);
	}
}

export default App;