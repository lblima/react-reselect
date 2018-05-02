import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { getBooks, getBook } from './actions/index';
import { makeGetBookState } from './selector';

class App extends Component {

  componentDidMount() {
    this.props.getBooks();
  }

  renderBookList() {
    if (this.props.books) {
      return this.props.books.map((book) => {
          return (
              <li 
                  onClick={ () => this.props.getBook(book.id) }
                  key={ book.id } 
                  className='list-group-item'>{ book.name }</li>
          );
      });
    }
    else
    {
      return <li>loading...</li>
    }
  }

  renderSelectedBook() {
    if (this.props.selectedBook) {
      return <span>{this.props.selectedBook.name}</span>
    }
    else
    {
      return <span>select a book</span>
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Reselect Sample</h1>
        </header>
        <p className="App-intro">
            <ul className='list-group col-sm-4'>
                { this.renderBookList() }
            </ul>
        </p>
        <p>
          <h3>Selected book: { this.renderSelectedBook() }</h3>
        </p>
      </div>
    );
  }
}

function mapStateToProps({ BookReducer }) {
  const getBook = makeGetBookState();
 
  return {
      books: BookReducer.books,
      selectedBook: (state, props) => getBook(state, props) //BookReducer.book
  };
}

export default connect(mapStateToProps, { getBooks, getBook })(App);
