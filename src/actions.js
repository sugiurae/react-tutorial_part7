// ex)
// export const didMnt = (jsonDataMap) => {
//     return {
//         type: 'JSON_DATA_MAP',
//         payload: { jsonDataMap }
//     };
// }


export const didMnt = (dataList) => {
    return {
        type: 'JSON_DATA_MAP',
        payload: { dataList }
    };
}

export const selectLang = (value) => {
    return {
        type: 'SELECT_Lang',
        payload: { value }
    };
}