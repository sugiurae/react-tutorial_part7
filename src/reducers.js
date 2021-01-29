'use strict';

const initialState = {
    id: 0,
    name: "",
    address: ""
}
export function conditions(state = initialState, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'DID_MOUNT':
            newState.id = action.payload.id;
            newState.name = action.payload.name;
            newState.address = action.payload.address;
            break;
        case 'UPDATE_FORM_ID':
            newState.id = action.payload.value;
            break;
        case 'UPDATE_FORM_NAME':
            newState.name = action.payload.value;
            break;
        case 'UPDATE_FORM_ADDRESS':
            newState.address = action.payload.value;
            break;
        default:
            return state;
    }
    console.log(newState);
    return newState;
};
