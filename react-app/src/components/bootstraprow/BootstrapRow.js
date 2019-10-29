import React from 'react';
import {MapTo, ResponsiveGrid, withComponentMappingContext, Utils} from '@adobe/cq-react-editable-components';
import $ from 'jquery';

export default class BootstrapRow extends ResponsiveGrid {
    cqPath: string;

    constructor(...args:any[]) {
        super(args); 
        // specific AEM identifier where the DIV would be located
        this.cqPath = this.props[0].cqPath;
    }

    render() {
        const items = [];
        for (const [index, value] of super.childComponents.entries()) {
            // each of the super.childComponents are enclosed in a div, therefore
            // we can always put them in whatever position we want
            items.push(   

                <div class="col-sm">
                    {super.childComponents[index]}
                </div>    
            );
        }  

        return [
            items,

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
        rowDiv.addClass("row");
    }
}

MapTo('wknd-events/components/content/bootstraprow')(withComponentMappingContext(BootstrapRow));

