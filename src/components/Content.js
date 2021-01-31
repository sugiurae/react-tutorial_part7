'use strict';
import React from 'react';
import { combineReducers } from 'redux';

export default function Content(props) {
    // console.log(props.conditions.list);
    // console.log(props.conditions.value);
    // console.log(Object.keys(props.conditions.list[0].pv));
    // const tbody = "";
    // if の外に出すには→let tbody letじゃないと！！
    let tbody;
        const langList = props.conditions.list.find((lang) => lang.title == props.conditions.value);
        if (langList){
            // undifindが出たらifでくくる！！！！！！！！！！
            console.log(langList);
             tbody =  Object.keys(langList.pv).map((date,index)=>{
                // console.log(date);
                return(<tr key={index}>
                    <td>{props.conditions.value}</td>
                    <td>{ date }</td>
                    <td>{langList.pv[date]}</td>
                    {/* <td>{Object.values(langList.pv)[index]}</td> */}
                </tr>);
            });
            // return tbody
        }
        // console.log(tbody);
    //   const tbody = props.conditions.list.map((date,index)=>{
                // return(<tr key={index}>
                //             <td>{props.conditions.value}</td>
                //             <td>{date.pv}</td>
                //         </tr>);
    //     });
    // props.conditions.list.map((data)=>{
    //     data.title == props.conditions.value
    // });
    // props.conditions.list.map((data)=>{
    //     console.log(data.id == props.conditions.value);
    //     // data.map((lang) => lang.id == props.conditions.value);
    // });
    // phpDate.map((date,index)=>{
    //             return(<tr key={index}>
    //                         <td>PHP</td>
    //                         <td>{date}</td>
    //                         <td>{phpPv[index]}</td>
    //                     </tr>);
    //     });
    // langList.map(()=>{
        
    // });
    // const jsonLang = ["PHP","React","HTML"]
    // const phpDate = [];
    // const reactDate = [];
    // const htmlDate = [];

    // const phpPv = [];
    // const reactPv = [];
    // const htmlPv = [];
    // let tbody = "";
// date
//     if (props.conditions.phpList.date) {
//         for(let i = 0; i < props.conditions.phpList.date.length; i++){
//             phpDate.push(props.conditions.phpList.date[i]);

//         }
//     }
//     if (props.conditions.reactList.date) {
//         for(let i = 0; i < props.conditions.reactList.date.length; i++){
//             reactDate.push(props.conditions.reactList.date[i]);
//         }
//     }
//     if (props.conditions.htmlList.date) {
//         for(let i = 0; i < props.conditions.htmlList.date.length; i++){
//             htmlDate.push(props.conditions.htmlList.date[i]);
//         }
//     }
// // pv
//     if (props.conditions.phpList.pv) {
//         for(let i = 0; i < props.conditions.phpList.pv.length; i++){
//             phpPv.push(props.conditions.phpList.pv[i]);
//         }
//     }
//     if (props.conditions.reactList.pv) {
//         for(let i = 0; i < props.conditions.reactList.pv.length; i++){
//             reactPv.push(props.conditions.reactList.pv[i]);
//         }
//     }
//     if (props.conditions.htmlList.pv) {
//         for(let i = 0; i < props.conditions.htmlList.pv.length; i++){
//             htmlPv.push(props.conditions.htmlList.pv[i]);
//         }
//     }
    // lange読み込み
    // console.log(props.conditions.value);
    // props.conditions.value.find((date)=>{
    //     console.log(date);
    // });
    // if(props.conditions.value == "PHP"){
        // console.log("hoge");

        // const tbodyPv = phpPv.map((pv,index)=>{
        //     return(
        //                 <td>{pv}</td>);
        // });

    //     const tbody = phpDate.map((date,index)=>{
    //             return(<tr key={index}>
    //                         <td>PHP</td>
    //                         <td>{date}</td>
    //                         <td>{phpPv[index]}</td>
    //                     </tr>);
    //     });
    //     const reactTbody = reactDate.map((date,index)=>{
    //             return(<tr key={index}>
    //                         <td>React</td>
    //                         <td>{date}</td>
    //                         <td>{reactPv[index]}</td>
    //                     </tr>);
    //     });
    //     const htmlTbody = htmlDate.map((date,index)=>{
    //         return(<tr key={index}>
    //                     <td>HTML</td>
    //                     <td>{date}</td>
    //                     <td>{htmlPv[index]}</td>
    //                 </tr>);
    // });

        // function Tbody(){
        //     switch (props.conditions.value) {
        //         case "PHP":
        //             { phpTbody }
        //             break;
        //         case "React":
        //             { reactTbody }
        //             break;
        //         case "HTML":
        //             { htmlTbody }
        //             break;
        //         default:

        //             break;
        //     }
        // };
    return (
        <div>
            <p>content</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>lang</th>
                        <th>date</th>
                        <th>pv</th>
                    </tr>
                </thead>
                <tbody>
                    { tbody }
                </tbody>
            </table>
        </div>
    );

}
