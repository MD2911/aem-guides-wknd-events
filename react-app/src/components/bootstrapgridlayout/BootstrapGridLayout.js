import React from 'react';
import {MapTo, ResponsiveGrid, withComponentMappingContext, Utils} from '@adobe/cq-react-editable-components';
import $ from 'jquery';

export default class BootstrapGridLayout extends ResponsiveGrid {
    cqPath: string;

    constructor(...args:any[]) {
        super(args); 
        // specific AEM identifier where the DIV would be located
        this.cqPath = this.props[0].cqPath;
    }

    render() {
        return (
                <div>
                     <div class="container" div-type="BootstrapGridLayout">
                       {super.childComponents}
                    </div>
                    {super.placeholderComponent}    
                </div>
            );    
    }

    addClass() {
        // find cqDataPath
        // seriously, there is not enough documentation in AEM how to pull this out without doing this approach
        // in theory the containerProps should work, but in this case, it didn't
        let childComponents = super.childComponent;

        var parentDiv = $("div").find(`[div-type='BootstrapGridLayout']`).children().each(
            function(index) {
                $(this).addClass("row");
            }
        );
    }

    componentDidMount() {
        this.addClass();
    }

    componentDidUpdate() {
        this.addClass();
    }
}

MapTo('wknd-events/components/content/bootstrapgridlayout')(withComponentMappingContext(BootstrapGridLayout));

