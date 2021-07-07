export const sortNamesAlphabetically = (arrNames) => {
  return arrNames.sort((a, b) => a.name.first.localeCompare(b.name.first));
};
