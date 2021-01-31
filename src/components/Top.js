'use strict';
import React from 'react';
import { combineReducers } from 'redux';

export default function Top(props) {
    // console.log(props.conditions.list[0].title);
    // console.log(props.conditions.list.length);

    const options = props.conditions.list.map((data,index) => {
        // console.log(data.title);
        return(
            <option key={index} value={data.title}>{data.title}</option>
        );
    });
    // props.conditions.list.lang.map();
    // titleList.push(props.conditions.phpList.title);
    // titleList.push(props.conditions.reactList.title);
    // titleList.push(props.conditions.htmlList.title);
    // console.log(titleList);
    // const optiondds = titleList.map((data,index) =>{
    //     // console.log(data);
    //     return(
    //         <option key={index} value={data}>{data}</option>
    //     );
    // });
    return (
        <div>
            <h1>Toaaaap</h1>
            <label >言語選択：</label>
            <select id="lang"
                  onChange={(e) => props.onChangeSelectLang(e)}
                //   value={ props.conditions.selectCtlValues.value }
                  >
                <option value="-1">タグを選択して下さい</option>
                { options }
          </select>
        </div>
    )
}
