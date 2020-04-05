import { createSelector } from "reselect";

const shop = state => state.shop;

export const getCollections = createSelector([shop], shop => shop.collections);

/**
 * getCollection will return an object as of now our data is stored in the form of an object.
 * collections is our data in the form of an object
 * now object.keys will return an array of keys of our collection as [hats,sneakers,jackts,mens,womens]
 * now we will map over this array and get the particular key items and create an array out of it
 */

export const selectonCollectionPreview = createSelector(
  [getCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const getCollection = id => {
  return createSelector(getCollections, collections => collections[id]);
};
