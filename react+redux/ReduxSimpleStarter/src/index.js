import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyB406gdXBDL5IUuD02fw8fuD1HE_kVOPYA';

const App = () => {
    return (
      <div>
        <SearchBar />
      </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'))
