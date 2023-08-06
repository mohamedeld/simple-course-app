import React, { useState } from 'react'
import './CourseInput.css'
const CourseInput = (props) => {
    const [courseInput,setCourseInput] = useState('');
    const clickHandler = (e)=>{
        setCourseInput(e.target.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        
        props.onSaveCourseData(courseInput);
    }
  return (
    <>
        <form onSubmit={submitHandler}>
      <div className="form-control">
        <label >Course Goal</label>
        <input type="text" value={courseInput} onChange={clickHandler}/>
      </div>
      <button type="submit">Add Goal</button>
    </form>
    </>
  )
}

export default CourseInput