import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Search extends Component {

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <div className="bookshelf-books">
                <ol className="books-grid">
                </ol>
              </div>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
