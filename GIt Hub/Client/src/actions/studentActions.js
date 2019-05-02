import {FETCH_STUDENTS, NEW_STUDENT} from './types';

// Fetch All Students.
export function fetchStudents() {
    return function(dispatch) {
        console.log('fetching');
        fetch('http://localhost:3000/api/students/list', {method: 'GET',
          headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
          }})
          .then(response => {
                console.log("this is json response");
                return response.json();
          })
          .then(data => {
            alert("Length from server ",data.recordset);
            dispatch({
                type:FETCH_STUDENTS,
                payload:data.recordset
            })
          })
          .catch(err => {
            console.error(err);
          })
    }
}

// Add new Student.

export const newStudent = (studentData) => {
  return (dispatch) => {
    console.log('adding new student');
    fetch('http://localhost:5000/api/student/add', {method: 'POST',
    headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(studentData)
  })
    .then(response => {
      return response.json();
    })
    .then(postData => {
      dispatch({
        type:NEW_STUDENT,
        payload:postData
      })
    })
  }
}