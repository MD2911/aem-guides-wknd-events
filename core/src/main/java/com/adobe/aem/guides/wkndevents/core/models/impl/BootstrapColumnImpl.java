package com.adobe.aem.guides.wkndevents.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.aem.guides.wkndevents.core.models.BootstrapColumn;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;

@Model(
		adaptables = SlingHttpServletRequest.class, 
		// make sure to change the adapter to the new class
		adapters = {BootstrapColumn.class, ComponentExporter.class}, 
		resourceType = BootstrapColumnImpl.RESOURCE_TYPE,
		defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
		)
@Exporter(
		name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
		extensions = ExporterConstants.SLING_MODEL_EXTENSION
		)
public class BootstrapColumnImpl extends BaseCustomContainerImpl implements BootstrapColumn {

	private static final String CUSTOM_COLUMN_CLASSNAME = "customColumnClassname";

	@ScriptVariable
	private ValueMap properties;

	static final String RESOURCE_TYPE = "wknd-events/components/content/bootstrapcolumn";
	private static final Logger log = LoggerFactory.getLogger(BootstrapColumnImpl.class);

	@Override
	public String getCustomClassname() {	
		return properties.get(CUSTOM_COLUMN_CLASSNAME, String.class);
	}

	@Override
	public String getExportedType() {
		return RESOURCE_TYPE;
	}	
}
