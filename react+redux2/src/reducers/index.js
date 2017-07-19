import { combineReducers } from 'redux'
import booksReduser from './reducer_books'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: booksReduser,
  activeBook: ActiveBook
})

export default rootReducer
