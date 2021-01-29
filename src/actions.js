
export const didMnt = (id,name,address) => {
    return {
        type: 'DID_MOUNT',
        payload: { id,name,address }
    };
}


export const updateFormId = (value) => {
    return {
        type: 'UPDATE_FORM_ID',
        payload: { value }
    };
}
export const updateFormName = (value) => {
    return {
        type: 'UPDATE_FORM_NAME',
        payload: { value }
    };
}
export const updateFormAddress = (value) => {
    return {
        type: 'UPDATE_FORM_ADDRESS',
        payload: { value }
    };
}