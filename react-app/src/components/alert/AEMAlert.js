import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
import Alert from 'react-bootstrap/Alert';

const AlertConfiguration = {

    emptyLabel: 'Insert alert message here...',

    isEmpty: function(props) {
        return !props || !props.alertMessage || props.alertMessage.trim().length < 1;
    }
};

export default class AEMAlert extends Component {
   render() {
        let innercontent = this.props.alertMessage;
        return (
            <Alert variant='info'>
                {innercontent}
            </Alert>   
        );                 

    }
}

MapTo('wknd-events/components/content/alert')(AEMAlert, AlertConfiguration);