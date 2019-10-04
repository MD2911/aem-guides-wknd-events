import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
import Alert from 'react-bootstrap/Alert';

	/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 */
const AlertConfiguration = {

    emptyLabel: 'Insert alert message',

    isEmpty: function(props) {
        return !props || !props.alertMessage || props.alertMessage.trim().length < 1;
    }
};

export default class AEMAlert extends Component {
    render() {
        let innercontent = this.props.alertMessage;
        // use React Bootstrap to display the alert below
        return (
            <Alert variant='info'>
                {innercontent}
            </Alert>   
        );                 
    }
}

MapTo('wknd-events/components/content/alert')(AEMAlert, AlertConfiguration);