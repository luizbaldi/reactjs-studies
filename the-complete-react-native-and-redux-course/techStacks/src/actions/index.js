export const SELECT_LIBRARY = 'SELECT_LIBRARY';

export const selectLibrary = libraryId => ({
  type: SELECT_LIBRARY,
  payload: libraryId
});