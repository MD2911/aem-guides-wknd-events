import React from 'react';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from '../components/utils/RouteHelper';
import App from '../components/App'
import { Redirect, Route } from 'react-router';
import fetch from "node-fetch";


console.log("Path = " + process.env.GATSBY_APP_PAGE_MODEL_PATH );
//ModelManager.initialize({ path: process.env.GATSBY_APP_PAGE_MODEL_PATH });

let path = "";
let root = <div></div>;

if (typeof window !== 'undefined') {
  path =  window.location.pathname ;
}

 if (typeof document !== 'undefined') {
  root = document.getElementById('root');
}

// This component is the application entry point
export default class IndexPage extends React.Component {

    render() {
        let aem = {};
        
        /*ModelManager.initialize({ path: process.env.GATSBY_APP_PAGE_MODEL_PATH }).then((aemmodel) => {
               aem.model = aemmodel;
               console.log(aem.model);
            }
        );*/   

        console.log("Done... Done.... Done... Done.... Done... Done.... " );

        return (
            <div id="root">HUH</div>
        )
    }

    componentDidMount() {
         console.log("Component is mounted");
    }
}
