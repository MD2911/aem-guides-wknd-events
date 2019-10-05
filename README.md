# WKND Events SPA Editor: AEM-React Extended Examples

This is the code companion for a tutorial that walks through the process of setting up an AEM project to leverage the Single Page App or SPA Editor feature.

Aside from the implementation of Adobe, I am giving few more examples to show few more examples. This tutorial extends the Adobe Weekend Tutorial to cover few key-points that are common during the development. Note: The tutorial covers the basics based on my need, so it maybe different than what you are looking for. The extension from Chapter 3 includes the following:

1. Creation of a Simple Custom Component: Customization of properties, integration with React BootStrap and custom Exporter
1. Creation of a container component: How to work with dynamic container where each container can contain different type of AEM Components
1. Integration with Accordion in React BootStrap: Use the concept illustrated in #2 to integrate with a Accordion Component in Bootstrap

To start, please view the tutorial on HelpX: [Getting Started with the AEM SPA Editor - WKND Tutorial](https://helpx.adobe.com/experience-manager/kt/sites/using/getting-started-spa-wknd-tutorial-develop.html)

## WKND Events - React

[WKND Events for React and AEM SPA Editor - Tutorial](https://helpx.adobe.com/experience-manager/kt/sites/using/getting-started-spa-wknd-tutorial-develop/react.html)

### Solution Branches on GitHub

Adobe Code as a base:
* [Chapter 0](https://github.com/Adobe-Marketing-Cloud/aem-guides-wknd-events/tree/react/chapter-0)
* [Chapter 1](https://github.com/Adobe-Marketing-Cloud/aem-guides-wknd-events/tree/react/chapter-1)
* [Chapter 2](https://github.com/Adobe-Marketing-Cloud/aem-guides-wknd-events/tree/react/chapter-2)
* [Chapter 3](https://github.com/Adobe-Marketing-Cloud/aem-guides-wknd-events/tree/react/chapter-3)

Additional tutorial branch that I created:
* **react/chapter-4/custom-component**: Illustrate a simple Alert component using React Bootstrap to help understand how custom component work in AEM-React. See the [Wiki page for certain aspects of the code](https://github.com/MD2911/aem-guides-wknd-events/wiki/Creation-of-a-Simple-Custom-Component)

## Troubleshooting

Having an issue? These troubleshooting tips might help:

1. Verify that environment is AEM 6.4 + SP2
2. Check to see if any bundles are in an installed state [http://localhost:4502/system/console](http://localhost:4502/system/console)
3. Clear the browser cache/history or start a new browser session
4. Manually invalidate AEM client libraries to ensure the latest code is being loaded: http://localhost:4502/libs/granite/ui/content/dumplibs.rebuild.html

Still not working? Check out the [closed issues](https://github.com/Adobe-Marketing-Cloud/aem-guides-wknd-events/issues?q=is%3Aissue+is%3Aclosed) or [create a new issue](https://github.com/Adobe-Marketing-Cloud/aem-guides-wknd-events/issues). 
