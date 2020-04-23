import { createSelector } from "reselect";

const directory = state => state.directory;

export const getDirectorySections = createSelector(
  [directory],
  directory => directory.sections
);
