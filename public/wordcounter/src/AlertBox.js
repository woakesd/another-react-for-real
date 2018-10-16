import React from 'react';
import { IDLE, SUCCESS, FAILURE, WAITING } from './saveStatus';

function AlertBox({ status }) {
    if (status === FAILURE) {
        return <div className="mv2">Save failed</div>;
    } else if (status === SUCCESS) {
        return <div className="mv2">Save successful</div>;
    } else if (status === WAITING) {
        return <div className="mv2">Saving...</div>;
    } else {
        return null;
    }
}

export default AlertBox;