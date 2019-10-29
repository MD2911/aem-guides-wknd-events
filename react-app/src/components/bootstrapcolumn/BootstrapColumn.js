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

    componentDidMount() {
        console.log("Component did mount for "+ this.cqPath);
        // find cqDataPath
        var rowDiv = $("div").find(`[data-cq-data-path='${this.cqPath}']`);
        console.log(rowDiv);

        // seriously, there is not enough documentation in AEM how to pull this out without doing this approach
        // in theory the containerProps should work, but in this case, it didn't
        rowDiv.addClass("col-sm");
    }
}

MapTo('wknd-events/components/content/bootstrapcolumn')(withComponentMappingContext(BootstrapColumn));

