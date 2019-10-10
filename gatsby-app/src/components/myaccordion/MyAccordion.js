import React from 'react';
import {MapTo, ResponsiveGrid, withComponentMappingContext} from '@adobe/cq-react-editable-components';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class MyAccordion extends ResponsiveGrid {
    constructor(...args:any[]) {
        super(args);
    }

    get containerProps() {
         let attrs = super.containerProps;
         attrs.className = (attrs.className || '') + ' Container ';
         return attrs
     }

    render() {
        const items = [];
        for (const [index, value] of super.childComponents.entries()) {
            // each of the super.childComponents are enclosed in a div, therefore
            // we can always put them in whatever position we want
            items.push(   
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me! {index+1}
                            </Accordion.Toggle>
                        </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                 {super.childComponents[index]}
                            </Card.Body>
                    </Accordion.Collapse>
                </Card> 
            ) ;
        }  
      
       // use React Bootstrap to render the Accordion with ANY AEM Components
        return (
                <div>
                     <div  {...super.containerProps}>
                        <Accordion defaultActiveKey="0">
                            {items}
                        </Accordion>    
                        {super.placeholderComponent}    
                    </div> 

                    {super.placeholderComponent}    
                </div>
            );    
    }

}

MapTo('wknd-events/components/content/myaccordion')(withComponentMappingContext(MyAccordion));

