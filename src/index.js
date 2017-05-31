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
//const title = response.potentiallyMaliciousInput;
// This is safe:
//const element = <h1>{title}</h1>;

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
