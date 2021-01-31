'use strict';

const initialState = {
    // logの[0]番目を再現しながら初期値を書く
    // [{"","",{}},{},{}]な感じを再現
    list: [{id: "", title: "",pv: {}}],
    value: ""
}
export function conditions(state = initialState, action) {1
    // let newState = JSON.parse(state);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'JSON_DATA_MAP':
            newState.list = action.payload.dataList;

            break;
        case 'SELECT_Lang':
            newState.value = action.payload.value;
            break;
        default:
            return state;
    }
    // console.log(newState);
    return newState;
};
