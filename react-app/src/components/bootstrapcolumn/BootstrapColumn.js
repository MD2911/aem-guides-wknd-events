import React from 'react';
import {MapTo, ResponsiveGrid, withComponentMappingContext, Utils} from '@adobe/cq-react-editable-components';
import $ from 'jquery';

export default class BootstrapColumn extends ResponsiveGrid {
    cqPath: string;

    constructor(...args:any[]) {
        super(args); 
        // specific AEM identifier where the DIV would be located
        this.cqPath = this.props[0].cqPath;
    }

    render() {
        return [
            super.childComponents,

             <div>
                {super.placeholderComponent}   
            </div>
            
        ];
    }
}

MapTo('wknd-events/components/content/bootstrapcolumn')(withComponentMappingContext(BootstrapColumn));

