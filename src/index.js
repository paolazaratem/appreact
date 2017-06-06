import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">

        <Avatar user={props.author} />
        {/* new call to component UserInfo with props user and value of author */}
        <UserInfo user={props.author}/>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props){
  return(
    <div className = "UserInfo">
    {/*
      add the information in comment, but is better render avatar in other Component
      <img className="Avatar"
           src={props.author.avatarUrl}
           alt={props.author.name}>
    */}
  {/* new call to component Avatar and removed of the component Comment */}
      <Avatar user = {props.user} />
      <div className = "UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope to enjoy learning React!',
  author: {
    name: 'Hello Lulo',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment date={comment.date}
  text={comment.text}
  author={comment.author} />,
  document.getElementById('root')
);
