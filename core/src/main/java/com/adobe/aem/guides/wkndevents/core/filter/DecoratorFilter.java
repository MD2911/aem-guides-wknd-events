package com.adobe.aem.guides.wkndevents.core.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.apache.felix.scr.annotations.sling.SlingFilter;
import org.apache.felix.scr.annotations.sling.SlingFilterScope;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;

import com.day.cq.wcm.api.components.IncludeOptions;

@SlingFilter(scope = SlingFilterScope.COMPONENT, order = -300)
public class DecoratorFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// Usually, do nothing
		System.out.println("Executing the printout!!!");
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		boolean addClass = false;
		System.out.println("Initiaing filter systems!");
		
		if (request instanceof SlingHttpServletRequest) {
			System.out.println("I am filtering!!!");
			final SlingHttpServletRequest slingRequest = (SlingHttpServletRequest) request;
			final Resource resource = slingRequest.getResource();
			final String resourceType = resource.getResourceType();
			addClass = "wknd-events/components/content/bootstraprowl".equals(resourceType);
		}
		if (addClass) {
			final IncludeOptions options = IncludeOptions.getOptions(request, true);
			options.getCssClassNames().add("my-class");
		}
		chain.doFilter(request, response);
	}

	@Override
	public void destroy() {
		// Usually, do nothing
	}
}
