import React from 'react';
import {MapTo, ResponsiveGrid, withComponentMappingContext, Utils} from '@adobe/cq-react-editable-components';
import $ from 'jquery';

const BootstrapColumnConfiguration = {
    isEmpty: function(props) {
        return !props || !props.customColumnClassname || props.customColumnClassname.trim().length < 1;
    }
};

export default class BootstrapColumn extends ResponsiveGrid {
    constructor(...args:any[]) {
        super(args); 
    }

    render() {
        console.log("Classname props " + this.props.customClassname);
        console.log(this.props);
        console.log("##################");
        
        return [
            super.childComponents,

             <div>
                {super.placeholderComponent}   
            </div>
            
        ];
    }
}

MapTo('wknd-events/components/content/bootstrapcolumn')(BootstrapColumn, BootstrapColumnConfiguration);