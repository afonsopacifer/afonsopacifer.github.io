const filterRules = (filtersState, property) => item => {

  const emptyFilters = !filtersState.length;

  if(emptyFilters) return true;

  const itemsFound = filtersState.filter(filter => {
    return filter === item[property];
  });
  
  return itemsFound.length;

}

export default filterRules;