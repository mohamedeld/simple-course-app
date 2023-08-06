
import { useState } from 'react'
import './App.css'
import CourseInput from './components/CourseGoals/CourseInput/CourseInput'
import CourseList from './components/CourseGoals/CourseList/CourseList'
const DUMMY_DATA = [
  {name:'first course',id:1},
  {name:'second course',id:2}
];
function App() {
  const [courseData,setCourseData] = useState(DUMMY_DATA);
  const saveCourseData = (enteredCourse)=>{
    setCourseData((prevState)=>{
      return [{ name: enteredCourse,id:Math.random() },...prevState]
    });
  }
  const deleteCourseItem = ((courseId)=>{
    setCourseData((prevGoals)=>{
      const updateGoals = prevGoals.filter(course => course.id !== courseId);
      return updateGoals;
    })
  })
  return (
    <>
      <section className='goal-form'>
        <CourseInput onSaveCourseData={saveCourseData}/>
      </section>
      <section id="goals">
        <CourseList courses={courseData} onDeleteItem={deleteCourseItem}/>
      </section>
    </>
  )
}

export default App
