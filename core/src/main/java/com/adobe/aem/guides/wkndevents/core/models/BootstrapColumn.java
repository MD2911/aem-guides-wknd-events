package com.adobe.aem.guides.wkndevents.core.models;

import javax.annotation.Nullable;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;

public interface BootstrapColumn extends ComponentExporter, ContainerExporter {
	@Nullable
	public String getCustomClassname();
}
