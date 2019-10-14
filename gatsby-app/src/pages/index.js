import React from 'react';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from '../components/utils/RouteHelper';
import App from '../components/App'
import { Redirect, Route } from 'react-router';

console.log("Path = " + process.env.GATSBY_APP_PAGE_MODEL_PATH );
//ModelManager.initialize({ path: process.env.GATSBY_APP_PAGE_MODEL_PATH });

let path = "";
let root = <div></div>;
let model = null;

if (typeof window !== 'undefined') {
  path =  window.location.pathname ;
}

 if (typeof document !== 'undefined') {
  root = document.getElementById('root');
}

// This component is the application entry point
export default class IndexPage extends React.Component {

    render() {
        // create a async for later to handle with await
        async function initModelManager() {
            let p = ModelManager.initialize({ path: process.env.GATSBY_APP_PAGE_MODEL_PATH }).then((aemmodel) => {
                    model = aemmodel;
                }
            );

            console.log(p);

            // wait until init finished
            await p;
        }

        initModelManager().catch(() => { console.log ("Error in fetching....")});

        return (
            <div>Hello World</div>
        )
    }
}
