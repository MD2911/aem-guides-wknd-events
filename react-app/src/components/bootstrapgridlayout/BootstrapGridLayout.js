import React from 'react';
import {MapTo, ResponsiveGrid, withComponentMappingContext, Utils} from '@adobe/cq-react-editable-components';

export default class BootstrapGridLayout extends ResponsiveGrid {
    constructor(...args:any[]) {
        super(args);
    }

    render() {
        return (
                <div>
                    Bootstrap Responsive Grid<p/>

                     <div class="container">
                       {super.childComponents}
                    </div>
                    {super.placeholderComponent}    
                </div>
            );    
    }
}

MapTo('wknd-events/components/content/bootstrapgridlayout')(withComponentMappingContext(BootstrapGridLayout));

