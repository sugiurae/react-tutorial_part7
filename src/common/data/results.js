'use strict';


// export async function datassMap(languate){
//     const URL = `/js/reports/{language}.json`;
//     return await fetch(URL)
//     .then(res => res.json())
//     .then(json => {
//         const title = json["query"]["pages"]["1985"]["title"]
//         const date = Object.keys(json["query"]["pages"]["1985"]["pageviews"])
//         const pv = json["query"]["pages"]["1985"]["pageviews"]
//         return ({title: title, data: pv})
//     })
// };

export async function dataMap(language){
    const URL = `/js/reports/${language}.json`;
    return await fetch(URL)
    .then(res => res.json())
    .then(json => {
        const pageid = Object.keys(json["query"]["pages"]);
        const title = json["query"]["pages"][pageid]["title"];
        const pv = json["query"]["pages"][pageid]["pageviews"];
        // console.log({title: title, pv: pv});
        // ↓のようにする。
        return ({id: pageid.toString(),title: title, pv: pv})
    })
};

// export async function reactDataMap(){
//     const URL = `/js/reports/react.json`;
//     return await fetch(URL)
//     .then(res => res.json())
//     .then(json => {
//         const title = json["query"]["pages"]["3891255"]["title"]
//         const date = Object.keys(json["query"]["pages"]["3891255"]["pageviews"])
//         const pv = Object.values(json["query"]["pages"]["3891255"]["pageviews"])
//         return ({title,date,pv})
//     })
// };

// export async function htmlDataMap(){
//     const URL = `/js/reports/html.json`;
//     return await fetch(URL)
//     .then(res => res.json())
//     .then(json => {
//         const title = json["query"]["pages"]["1463"]["title"]
//         const date = Object.keys(json["query"]["pages"]["1463"]["pageviews"])
//         const pv = Object.values(json["query"]["pages"]["1463"]["pageviews"])
//         return ({title,date,pv})
//     })
// };