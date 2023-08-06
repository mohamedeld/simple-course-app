import React, { useState } from 'react';
import "./CourseList.css"
import CourseItem from '../CourseItem/CourseItem'

const CourseList = (props) => {
    
  return (
    <>
        <ul className="goal-list">
            {
                props.courses.length ===0 ? (<p>Courses not found</p>):(props.courses.map((course)=>(
                    <CourseItem key={course.id} course={course} onDelete={props.onDeleteItem}/>
                )))
                
            }
        </ul>
    </>
  )
}

export default CourseList