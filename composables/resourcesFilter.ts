export function userResourcesFilter(resourcesByCountry) {

  // Here we are filtering the resources by region, considering the region's name as unique identifier
  // We are using a Set to avoid duplicated resources
  // The buildKey function is responsible for creating the unique key for each resource

  const buildKey = (item: any) => {
    return item.region.toLowerCase().split(',').map(item => item.trim().replace(' ', '-')).join('_')
  }

  const filteredResources = ref([]);
  let resourcesKeys = new Set();
  for (let key in resourcesByCountry) {
    const value = resourcesByCountry[key];
    
    value.resources.forEach((resource: any) => {
      const key = buildKey(resource);
      
      if(!resourcesKeys.has(key)) {
        filteredResources.value.push(resource);
      }
    });

    value.resources.forEach(element => {
      resourcesKeys = new Set([
        ...resourcesKeys, 
        buildKey(element),
      ]);  
    });

  }

  return filteredResources;
}