package com.adobe.aem.guides.wkndevents.core.models;

import javax.annotation.Nullable;

import com.adobe.cq.export.json.ComponentExporter;

public interface Alert extends ComponentExporter {
	
	@Nullable
	public String getAlertMessage();
}
