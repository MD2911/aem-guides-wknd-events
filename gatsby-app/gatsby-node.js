
const adobe = require("@adobe/cq-spa-page-model-manager");
const fetch = require("node-fetch");

// support for fetch in node. AEM code use this to get the JSON file
global.fetch = fetch;

exports.createPages = async ({ actions: { createPage } }) => {
	// TODO: pass the URL from env variable... 
	return adobe.ModelManager.initialize({ path: "http://localhost:5000/mock.model.json" }).then((model) => {
	    createPage({
			path: `/content/wknd-events/react/home`,
			component: require.resolve('./src/templates/content/wknd-events/react/home/home.js'),
			context: {
				model, 
				rootPath: "/content/wknd-events/react/home" 
			}
		});
    });	
}