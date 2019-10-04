package com.adobe.aem.guides.wkndevents.core.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.aem.guides.wkndevents.core.models.Alert;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.day.cq.wcm.api.designer.Style;

@Model(
	    adaptables = SlingHttpServletRequest.class, 
	    adapters = {Alert.class, ComponentExporter.class}, 
	    resourceType = AlertImpl.RESOURCE_TYPE,
	    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
	    )
	@Exporter(
	    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, 
	    extensions = ExporterConstants.SLING_MODEL_EXTENSION
	    )
public class AlertImpl implements Alert {
	
	static final String RESOURCE_TYPE = "wknd-events/components/content/alert";
	
	static final String ALERT_MESSAGE = "alertMessage";
	
	
	private static final Logger log = LoggerFactory.getLogger(AlertImpl.class);
	
	@ScriptVariable
    private ValueMap properties;
	
	@ScriptVariable
    private Style currentStyle;

	@Override
	public String getExportedType() {
		return RESOURCE_TYPE;
	}

  
	@Override
	public String getAlertMessage() {
		return properties.get(ALERT_MESSAGE, String.class);
	}

}
