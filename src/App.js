import React from 'react'
import Shelf from './Shelf'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books:[],
    shelf:[
      {id:'currentlyReading',name:'Currenly Reading'},
      {id:'wantToRead',name:'Want to Read'},
      {id:'read',name:'Read'}
    ],

    showSearchPage: false
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  bookToShelf = (book,shelf) => {
    BooksAPI.update(book,shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books : this.state.books.filter( bk => bk.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <Shelf
              books={this.state.books}
              shelfs={this.state.shelf}
              moveBook={this.bookToShelf}
              />
          )}
          />
        <Route exact path='/search' render={() => (
            <Search />
          )}
          />
      </div>
    )
  }
}

export default BooksApp
