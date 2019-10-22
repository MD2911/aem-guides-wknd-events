package com.adobe.aem.guides.wkndevents.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.aem.guides.wkndevents.core.models.BootstrapGridLayout;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(
		adaptables = SlingHttpServletRequest.class, 
		adapters = {BootstrapGridLayout.class, ComponentExporter.class}, 
		resourceType = BootstrapGridLayoutImpl.RESOURCE_TYPE,
		defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
		)
@Exporter(
		name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
		extensions = ExporterConstants.SLING_MODEL_EXTENSION
		)
public class BootstrapGridLayoutImpl extends BaseCustomContainerImpl implements BootstrapGridLayout {

	static final String RESOURCE_TYPE = "wknd-events/components/content/bootstrapgridlayout";
	private static final Logger log = LoggerFactory.getLogger(BootstrapGridLayoutImpl.class);
	
	@Override
	public String getExportedType() {
		return RESOURCE_TYPE;
	}
}
