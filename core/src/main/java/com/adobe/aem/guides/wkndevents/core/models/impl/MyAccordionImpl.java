package com.adobe.aem.guides.wkndevents.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.aem.guides.wkndevents.core.models.MyAccordion;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(
		adaptables = SlingHttpServletRequest.class, 
		adapters = {MyAccordion.class, ComponentExporter.class}, 
		resourceType = MyAccordionImpl.RESOURCE_TYPE,
		defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
		)
@Exporter(
		name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
		extensions = ExporterConstants.SLING_MODEL_EXTENSION
		)
// Implement MyAccordion where MyAccordion has the necessary interface for Component and container
public class MyAccordionImpl extends BaseCustomContainerImpl implements MyAccordion {

	static final String RESOURCE_TYPE = "wknd-events/components/content/myaccordion";
	private static final Logger log = LoggerFactory.getLogger(MyAccordionImpl.class);


	@Override
	public String getExportedType() {
		return RESOURCE_TYPE;
	}
}
