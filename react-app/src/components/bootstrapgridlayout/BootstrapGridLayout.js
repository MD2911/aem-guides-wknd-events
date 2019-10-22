import React from 'react';
import {MapTo, ResponsiveGrid, withComponentMappingContext} from '@adobe/cq-react-editable-components';

export default class BootstrapGridLayout extends ResponsiveGrid {
    constructor(...args:any[]) {
        super(args);
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
      
        return (
                <div>
                    Bootstrap ResponsiveGrid<p/>

                     <div class="container">
                      <div class="row">
                        {items}
                      </div>
                    </div>
                    {super.placeholderComponent}    
                </div>
            );    
    }
}

MapTo('wknd-events/components/content/bootstrapgridlayout')(withComponentMappingContext(BootstrapGridLayout));

