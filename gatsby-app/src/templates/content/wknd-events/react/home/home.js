import React from 'react';
import { Constants } from '@adobe/cq-spa-page-model-manager';
import App from '../../../../../components/App'
import { Redirect, Route } from 'react-router';

// This component is the application entry point
class IndexPage extends React.Component {
    pageContext = {};
    rootPath = "";

    constructor(context) {
        super();
        this.pageContext = context.pageContext;
     }

    render() {
        console.log(this.pageContext);
        console.log("Obtaining root path ----> " + this.pageContext.rootPath);
        
        let model = this.pageContext.model;
        console.log(model);

        console.log("Constants.CHILDREN_PROP ::" + Constants.CHILDREN_PROP 
          + ", Constants.ITEMS_PROP] ::" + Constants.ITEMS_PROP 
          + ", Constants.ITEMS_ORDER_PROP:: "+ Constants.ITEMS_ORDER_PROP);

        return (
            <div>
              <div> Hello World </div>
               <App cqChildren={ model[Constants.CHILDREN_PROP] } cqItems={ model[Constants.ITEMS_PROP] } 
                    cqItemsOrder={ model[Constants.ITEMS_ORDER_PROP] }
                    cqPath="/content/wknd-events/react/home"
                    locationPathname={ "/content/wknd-events/react/home/home.html"}/>
            </div>
        )
    }
}

export default IndexPage;