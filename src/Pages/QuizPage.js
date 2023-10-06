import React, { Component } from 'react';

class QuizPage extends Component {
 constructor(props) {
 super(props);
 this.state = {
 questions: [
 {
 question: 'What is the Spanish word for "hello"?',
 options: ['Hola', 'Adiós', 'Gracias', 'Buenos días'],
 answer: 'Hola',
 selected: null,
 },
 {
 question: 'What is the Spanish word for "goodbye"?',
 options: ['Hola', 'Adiós', 'Gracias', 'Buenos días'],
 answer: 'Adiós',
 selected: null,
 },
 {
 question: 'What is the Spanish word for "thank you"?',
 options: ['Hola', 'Adiós', 'Gracias', 'Buenos días'],
 answer: 'Gracias',
 selected: null,
 },
 {
 question: 'What is the Spanish phrase for "good morning"?',
 options: ['Hola', 'Adiós', 'Gracias', 'Buenos días'],
 answer: 'Buenos días',
 selected: null,
 },
 ],
 score: 0,
 showResults: false,
 name: '',
 email: '',
 message: '',
 };
 }

 handleOptionSelect = (questionIndex, optionIndex) => {
 const questions = [...this.state.questions];
 questions[questionIndex].selected = optionIndex;
 this.setState({ questions });
 };

 handleSubmitQuiz = () => {
 const { questions, name, email, message } = this.state;
 let score = 0;
 questions.forEach((question) => {
 if (question.options[question.selected] === question.answer) {
 score++;
 }
 });

 console.log('Name:', name);
 console.log('Email:', email);
 console.log('Message:', message);
 this.setState({ score, showResults: true });
 };

 handleInputChange = (event) => {
 this.setState({ [event.target.name]: event.target.value });
 };

 render() {
 const { questions, score, showResults, name, email, message } = this.state;

 return (
 <div style={{ backgroundColor: 'lightpink' }}>
 <h1>Time to Test Your Knowldege With:</h1>
 <div className="alert alert-primary" role="alert">
 Hola Mundo Quiz Time!
 </div>
 {!showResults ? (
 <div>
 {questions.map((question, index) => (
 <div key={index}>
 <h3>{question.question}</h3>
 <div className="btn-group" role="group">
 {question.options.map((option, optionIndex) => (
 <button
 key={optionIndex}
 type="button"
 className={`btn ${
 question.selected === optionIndex
 ? 'btn-primary'
 : 'btn-outline-primary'
 }`}
 onClick={() =>
 this.handleOptionSelect(index, optionIndex)
 }
 >
 {option}
 </button>
 ))}
 </div>
 </div>
 ))}
 <button
 className="btn btn-primary mt-3"
 onClick={this.handleSubmitQuiz}
 >
 Submit Quiz
 </button>
 <div>
 <h2>Feel free to contact us anytime using the form below:</h2>
 <form>
 <div className="form-group">
 <label htmlFor="name">Name:</label>
 <input
 type="text"
 className="form-control"
 id="name"
 name="name"
 placeholder="Enter your name"
 value={name}
 onChange={this.handleInputChange}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="email">Email:</label>
 <input
 type="email"
 className="form-control"
 id="email"
 name="email"
 placeholder="Enter your email"
 value={email}
 onChange={this.handleInputChange}
 required
 />
 </div>
 <div className="form-group">
 <label htmlFor="message">Message:</label>
 <textarea
 className="form-control"
 id="message"
 name="message"
 rows="5"
 placeholder="Enter your message"
 value={message}
 onChange={this.handleInputChange}
 required
 ></textarea>
 </div>
 <button type="submit" className="btn btn-primary">
 Submit
 </button>
 </form>
 </div>
 </div>
 ) : (
 <div>
 <h2>Quiz Results</h2>
 <p>
 Your score: {score} out of {questions.length}
 </p>
 </div>
 )}
 </div>
 );
 }
}

export default QuizPage;
