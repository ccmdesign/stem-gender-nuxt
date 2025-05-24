export function userResourcesFilter(resourcesByCountry) {

  // Here we are filtering the resources by region, considering the region's name as unique identifier
  // We are using a Set to avoid duplicated resources
  // The buildKey function is responsible for creating the unique key for each resource

  const buildKey = (item: any) => {
    return item.region.toLowerCase().split(',').map(item => item.trim().replace(' ', '-')).join('_')
  }

  const filteredResources = ref([]);
  const resourcesKeys = new Set();

  for (const countryKey in resourcesByCountry) {
    const { resources } = resourcesByCountry[countryKey];

    resources.forEach((resource: any) => {
      const key = buildKey(resource);
      if (!resourcesKeys.has(key)) {
        filteredResources.value.push(resource);
        resourcesKeys.add(key);
      }
    });
  }

  return filteredResources;
}