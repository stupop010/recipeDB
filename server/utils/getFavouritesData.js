const getFavouritesData = data => {
  let results = [];
  data.map(item => results.push(item.dataValues));
  return results;
};

module.exports = getFavouritesData;
