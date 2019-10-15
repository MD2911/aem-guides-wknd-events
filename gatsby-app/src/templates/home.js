import React from 'react';


// This component is the application entry point
class IndexPage extends React.Component {
    pageContext = {};

    constructor(context) {
        super();
        this.pageContext = context.pageContext;
    }

    render() {
        console.log(this.pageContext);
    

        return (
            <div id="root">Custom Page With Data</div>
        )
    }
}

export default IndexPage;