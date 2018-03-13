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
    const { books,shelfs } = this.props
      return(
          <div>
              {shelfs.map((shelf) => (
                <div key={shelf.id} className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.name}</h2>
                  <div className="bookshelf-books">
                    <Books books={books} />
                  </div>
                </div>
            ))}
          </div>
      )
  }
}

export default Shelf;