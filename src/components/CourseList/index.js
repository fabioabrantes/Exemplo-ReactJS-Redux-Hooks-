import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function CourseList() {
  const courses = useSelector(state =>state.data);
  const dispach = useDispatch();
  
  function addCourse(){
    dispach({type:'ADD_COURSE', title: 'vuejs'});
  }

  return (
    <>
      <ul>
        {courses.map(course => <li key={course}>{course}</li>)}
      </ul>
      <button onClick={addCourse}> adicionar um Curso</button>
    </>
  );
}

export default CourseList;