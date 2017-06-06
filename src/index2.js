import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Paola',
  lastName: 'Zarate'
};


/*const element = (
  //Hello, {formatName(user)}! //with only formatName
  <h1>
    {getGreeting(user)}
  </h1>
);*/

//jsx in if
function getGreeting(user) {
  if (user) {
    return <h1>¡Hello! {formatName(user)}</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

//jsx in Attributes html
//const element = <div tabIndex="0">paola</div>;

//const element = <img src={user.avatarUrl}></img>;

//finish element with />
//const element = <img src={user.avatarUrl} />;

//element can childrens in the Attributes
/*const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);*/

//JSX Prevents Injection Attacks
/*const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;*/

/*React.createElement() performs a few checks to help you write bug-free
 code but essentially it creates an object like this:
 React elements are immutable.
 */
/*const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, peace!'
);

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();*/

/*
React elements are immutable. Once you create an element, you can't change
 its children or attributes. An element is like a single frame in a movie:
 it represents the UI at a certain point in time.

 SHOW HOUR LOCAL,UPDATE 1 SECOND

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
*/

/*
call function and render in App2
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App2() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  <App2 />,
  document.getElementById('root')
);*/

/*
--- object with image ----
function formatDate(date) {
  return date.toLocaleDateString();
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
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('root')
);*/

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
             src={props.author.avatarUrl}
             alt={props.author.name} />
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
