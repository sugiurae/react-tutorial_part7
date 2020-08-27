'use strict';

const initialState = {
    id: "",

    name: ""
}
export function conditions(state = initialState, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'FORM_ID':
            newState.id = action.payload.value;
            break;
        case 'FORM_NAME':
            newState.name = action.payload.value;
            break;
        default:
            return state;
    }
    return newState;
};
