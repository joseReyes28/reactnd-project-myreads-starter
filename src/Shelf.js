import React, { Component } from 'react'
import Books from './Books'
import PropTypes from 'prop-types'


class Shelf extends Component{

  static propTypes = {
    books : PropTypes.array.isRequired,
    shelfs : PropTypes.array.isRequired,
  }

  state = {

  }

  render(){
    const { books,shelfs,moveBook } = this.props
      return(
          <div>
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  {shelfs.map((shelf) => (
                    <div key={shelf.id} className="bookshelf">
                      <h2 className="bookshelf-title">{shelf.name}</h2>
                      <div className="bookshelf-books">
                        <Books books={books.filter((book) => (shelf.id === book.shelf)) } moveBook={moveBook} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      )
  }
}

export default Shelf;
