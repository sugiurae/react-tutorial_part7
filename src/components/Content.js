'use strict';
import React from 'react';

export default function Content(props) {

    const id = props.formItem.conditions.id
    const name = props.formItem.conditions.name
    const address = props.formItem.conditions.address

    return (
        <div>
            <Toast id={id} name={name} address={address}/>
            <p>content</p>

            <Form id={id} name={name} address={address}
                onChangeId={props.onChangeId}
                onChangeName={props.onChangeName}
                onChangeAddress={props.onChangeAddress}
            />
            <button type="button"
                className="btn btn-outline-success"
                onClick={() => props.onSaveItem()} >
                SAVE
            </button>
        </div>
    );

}

function Form(props) {
    return (
        <div className="form-group">
            <label className="pt-2">ID</label>
            <input id="1"
                type="text"
                className="form-control"
                value={props.id}
                onChange={(e) => props.onChangeId(e)}
            />
            <label className="pt-2">Name</label>
            <input id="2"
                type="text"
                className="form-control"
                value={props.name}
                onChange={(e) => props.onChangeName(e)}
            />
            <label className="pt-2">Address</label>
            <input id="3"
                type="text"
                className="form-control"
                value={props.address}
                onChange={(e) => props.onChangeAddress(e)}
            />
        </div>
    )
}
function Toast(props) {
    return (
        <div id="toast1" className="toast" data-delay="3000" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="toast-body">
                <p>id: {props.id}</p>
                <p>name: {props.name}</p>
                <p>address: {props.address}</p>
            </div>
        </div>
    );
}