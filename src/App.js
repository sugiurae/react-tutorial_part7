import React, { Component } from 'react';

import * as results from './common/data/results';
import Top from './components/Top';
import Content from './components/Content';

class App extends Component {
	constructor(props) {
        super(props);
    }
	componentDidMount() {
        (async () => {
            const dataList = [];
            // const tmpMap = await results.dataMap("php");
            // data.push(tmpMap)

            // ここにファイル名を追加するだけ
            const langList = ["php","react","html"];
            await Promise.all(langList.map(async (lang)=>{
                const tmpMap = await results.dataMap(lang);
                dataList.push(tmpMap);
                // console.log(tmpMap);
            }));
            this.props.didMnt(dataList);

            // langList.map((lang) =>{
            //     const tmpMap = await results.dataMap(lang);
            //     dataList.push(tmpMap);
            //     console.log(tmpMap);
            // });
            // await Promise.all(langList.map(async (lang)=>{
            //     // console.log(lang);
            //     const tmpMap = await results.dataMap(lang);
            //     dataList.push(tmpMap);
            //     console.log(tmpMap);
            // }));
            // const reactDataMap = await results.reactDataMap();
            // const htmlDataMap = await results.htmlDataMap();
            // const jsonDataMap = {phpDataMap, reactDataMap, htmlDataMap};
            // // これはphpDataMap.phpTitleまで出る
            // console.log(jsonDataMap.phpDataMap.phpTitle);
            // this.props.didMnt(phpDataMap, reactDataMap, htmlDataMap);
            // this.props.didMnt(jsonDataMap);
            // console.log(phpDataMap.title);
        })();
    }
    onChangeSelectLang = (e) => {
        console.log()
        this.props.selectLang(e.target.value);
        // console.log(e.target.value);
    }
	render() {
        // できた。const jsonDataMap = {phpDataMap, reactDataMap, htmlDataMap};→this.props.didMnt(phpDataMap, reactDataMap, htmlDataMap);一つづつでうまくいった。
        // phpDataMap.phpTitle以下が出ない
        console.log('App.render:', this.props);
        const topData = ({ conditions, }) => ({ conditions });
        const topHander = ({onChangeSelectLang}) => ({onChangeSelectLang});

        const contentData = ({ conditions }) => ({conditions });
		return (
			<div >
				⑦基礎確認編_4
                <div className="main">
                    <div className="container">
                        <Top  {...topData(this.props)} {...topHander(this)}/>
                        <Content {...contentData(this.props)}/>
                    </div>
                </div>
			</div>
		);
	}
}

export default App;