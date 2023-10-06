import React, { Component } from 'react';
import HomePage from './Pages/HomePage';
import LessonsPage from './Pages/LessonsPage';
import QuizPage from './Pages/QuizPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
    };
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { currentPage } = this.state;

    let pageContent;
    if (currentPage === 'home') {
      pageContent = <HomePage />;
    } else if (currentPage === 'lessons') {
      pageContent = <LessonsPage />;
    } else if (currentPage === 'quiz') {
      pageContent = <QuizPage />;
    }

    return (
      <div>
        <nav>
          <ul>
            <li>
              <button onClick={() => this.handlePageChange('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => this.handlePageChange('lessons')}>Lessons</button>
            </li>
            <li>
              <button onClick={() => this.handlePageChange('quiz')}>Quiz</button>
            </li>
          </ul>
        </nav>
        {pageContent}
      </div>
    );
  }
}

export default App;