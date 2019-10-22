package com.adobe.aem.guides.wkndevents.core.models.impl;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.annotation.Nonnull;
import javax.inject.Inject;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.factory.ModelFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.aem.guides.wkndevents.core.models.MyAccordion;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;
import com.adobe.cq.export.json.SlingModelFilter;
import com.day.cq.wcm.api.designer.Style;

// Implement MyAccordion where MyAccordion has the necessary interface for Component and container
public abstract class BaseCustomContainerImpl implements ComponentExporter, ContainerExporter {

	private static final Logger log = LoggerFactory.getLogger(BaseCustomContainerImpl.class);
	private Map<String, ComponentExporter> childComponents = null;

	@ScriptVariable
	private ValueMap properties;

	@ScriptVariable
	private Style currentStyle;

	@Self
	private SlingHttpServletRequest request;

	@Inject
	private SlingModelFilter slingModelFilter;

	@Inject
	private ModelFactory modelFactory;

	@Override
	public Map<String, ? extends ComponentExporter> getExportedItems() {
		if (childComponents == null) {
			childComponents = getItemModels(request, ComponentExporter.class);
		}

		return childComponents;
	}
	
	@Override
	public String[] getExportedItemsOrder() {

		Map<String, ? extends ComponentExporter> models = getExportedItems();

		if (models.isEmpty()) {
			return ArrayUtils.EMPTY_STRING_ARRAY;
		}

		return models.keySet().toArray(ArrayUtils.EMPTY_STRING_ARRAY);
	}

	/**
	 * Returns a map (resource name => Sling Model class) of the given 
	 * resource children's Sling Models that can be adapted to {@link T}.
	 *
	 * @param slingRequest The current request.
	 * @param modelClass  The Sling Model class to be adapted to.
	 * @return Returns a map (resource name => Sling Model class) 
	 * of the given resource children's Sling Models that can be adapted to {@link T}.
	 */
	@Nonnull
	private <T> Map<String, T> getItemModels(
			@Nonnull SlingHttpServletRequest slingRequest,
			@Nonnull Class<T> modelClass) {
		Map<String, T> itemWrappers = new LinkedHashMap<>();

		Iterable<Resource> iterable = slingModelFilter.filterChildResources(
				request.getResource().getChildren());

		if (iterable == null) {
			return itemWrappers;
		}

		for (final Resource child : iterable) {
			itemWrappers.put(child.getName(), modelFactory.getModelFromWrappedRequest(
					slingRequest, child, modelClass));
		}

		return  itemWrappers;
	}

}
