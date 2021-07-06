import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    console.log("I run everytime the 'name' changes");
  }, [name]);

  const onNameChangeHandler = event => {
    setName(event.target.value);
  };

  const onTitleChangeHandler = event => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={onNameChangeHandler} />
        <h1>Name: {name}</h1>
      </div>
      <div>
        <input type="text" onChange={onTitleChangeHandler} />
        <h1>Title: {title}</h1>
      </div>
    </div>
  );
}
