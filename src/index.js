import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/main.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './js/reducers/reducer-users';
import App from './js/components/app';

// var store = createStore();
const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// class Movie extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.genre}</h2>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//   <div>
//     <Movie title="Inception" genre="Thriller"/>
//     <Movie title="Mission Impossible" genre="Action"/>
//     <Movie title="Ironman" genre="Action"/>
//     <Movie />
//   </div>
//     ,
//   document.getElementById('root')
// );

// const element = <Welcome name="Aditya" />
// function Welcome(props){
//     return <h2>Hello, {props.name}!</h2>
// }
//
// ReactDOM.render(
//     element
//     , document.getElementById('root')
// );

// class Comment extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {editing: false};
//
//         this.edit = this.edit.bind(this);
//     }
//
//     edit = () => {
//         this.setState({editing: true});
//     }
//     remove = () => {
//         this.props.deleteFromBoard(this.props.index);
//     }
//     save = () => {
//         this.props.updateCommentText(this.refs.newText.value, this.props.index);
//         this.setState({editing: false});
//     }
//     renderNormal(){
//         return (
//             <div className="commentContainer">
//                 <div className="commentText">{this.props.children}</div>
//                 <button className="button-primary" onClick={this.edit}>Edit</button>
//                 <button className="button-danger" onClick={this.remove}>Remove</button>
//             </div>
//         );
//     }
//     renderForm(){
//         return (
//             <div className="commentContainer">
//                 <textarea ref="newText" defaultValue={this.props.children}></textarea>
//                 <button className="button-success" onClick={this.save}>Save</button>
//             </div>
//         );
//     }
//
//     render(){
//         if(this.state.editing){
//             return this.renderForm();
//         } else {
//             return this.renderNormal();
//         }
//     }
// }

// class Board extends React.Component {
//
//     constructor(props){
//         super(props);
//         this.state = {comments: []};
//
//     }
//     addComment = (text) => {
//         var arr = this.state.comments;
//         arr.push(text);
//         this.setState({comments: arr});
//     }
//     updateComment = (newText, i) => {
//         var arr = this.state.comments;
//         arr[i] = newText;
//         this.setState({comments: arr});
//     }
//     deleteComment = (i) => {
//         var arr = this.state.comments;
//         arr.splice(i, 1);
//         this.setState({comments: arr});
//     }
//     eachComment(text, i){
//         return (<Comment key={i} index={i} updateCommentText={this.updateComment.bind(this)} deleteFromBoard={this.deleteComment.bind(this)}>{text}</Comment>)
//     }
//     render(){
//         return(
//             <div>
//                 <button onClick={this.addComment.bind(this, 'Default Text')} className="button-info create">Add New</button>
//                 <div className="board">
//                 {this.state.comments.map(this.eachComment.bind(this))}
//                 </div>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Board />
//     , document.getElementById('root'));

// class CheckBox extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {checked: true};
//
//         this.handleChecked = this.handleChecked.bind(this);
//     }
//     handleChecked = () => {
//         this.setState(prevState => ({
//             checked: !this.state.checked
//         }));
//     }
//     render(){
//         var msg;
//         if(this.state.checked){
//             msg = 'checked';
//         } else {
//             msg = 'unchecked';
//         }
//         return(
//             <div>
//                 <input type='checkbox' onChange={this.handleChecked} defaultChecked={this.state.checked}/>
//                 <h3>Checkbox is {msg}</h3>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <div className="">
//         <CheckBox />
//     </div>
//     , document.getElementById('root'));
