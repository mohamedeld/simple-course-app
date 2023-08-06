import React, { useState } from 'react'
import "./CourseItem.css";
const CourseItem = (props) => {
   
    const deleteHandler = ()=>{
        props.onDelete(props.course.id);
    }
  return (
    <>
        <li className="goal-item" onClick={deleteHandler}>{props.course.name}</li>
    </>
  )
}

export default CourseItem