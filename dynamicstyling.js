import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valid,setValid] = useState(true);
  let style;

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length>0)
    {
      setValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
   
    if(enteredValue.trim().length===0)
    {
      setValid(false)
      return;
    }

    props.onAddGoal(enteredValue);
  };
   
   if(enteredValue.trim().length===0)
   {
     style={backgroundColor: "red" , opacity: .4};
   }
   else
   {
     style={backgroundColor: "red"};
   }
   
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: valid ? 'green' : 'red'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} style={{background : valid ?'green' : 'red'}} />
      </div>
      <Button type="submit" style={style}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
