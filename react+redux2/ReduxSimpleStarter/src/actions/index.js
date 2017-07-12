export const selectBook = book => {
  // selectBook is an ActionCreator it need to return action
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
