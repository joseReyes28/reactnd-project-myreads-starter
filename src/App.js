import React from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[],
    shelf:[
      {id:'currenlyReading',name:'Currenly Reading'},
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

  render() {
    return (
      <div className="app">
        (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf books={this.state.books} shelfs={this.state.shelf} />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default BooksApp
