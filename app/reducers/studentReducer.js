import { initialState } from './index';
import axios from 'axios';

const ADD_STUDENT = 'ADD_STUDENT';
const RECEIVED_STUDENTS = 'RECEIVED_STUDENTS';
const RECEIVED_STUDENT = 'RECEIVED_STUDENT'
const DESTROY_STUDENT = 'DESTROY_STUDENT'
const EDIT_STUDENT = 'EDIT_STUDENT'

export const receiveStudents = students => ({ type: RECEIVED_STUDENTS, payload: students });
export const receiveStudent = Student => ({type: RECEIVED_STUDENT, payload: Student})
export const addStudent = newStudent => ({type: ADD_STUDENT, payload: newStudent})
export const destroyStudent = studentToDestroy => ({type: DESTROY_STUDENT, payload: studentToDestroy})
export const editStudent = studentToEdit => ({type: EDIT_STUDENT, payload: studentToEdit})
 
export const fetchStudents = () => async dispatch => {
  const response = await axios.get('/api/students');
  const studentData = response.data;
  dispatch(receiveStudents(studentData));
};

export const fetchStudent = (id) => async dispatch => {
  const response = await axios.get(`/api/students/${id}`)
  const studentData = response.data
    dispatch(receiveStudent(studentData))
}

export const makeStudent = (student) => async dispatch => {
  const response = await axios.post('/api/students', student)
  const studentData = response.data
  dispatch(addStudent(studentData))
}

export const deleteStudent = (id) => async dispatch => {
  const response = await axios.delete(`/api/students/${id}`);
  const studentData = response.data;
  dispatch(destroyStudent(studentData));
};

export const updateStudent = (student, id) => async dispatch =>{
  const response = await axios.put(`/api/students/${id}`, student);
  const studentData = response.data;
  dispatch(editStudent(studentData));
};
const studentsReducer = (students = initialState.students, action) => {
  console.log(initialState)
  console.log(students)
  console.log(action.payload)
  switch (action.type) {
    case RECEIVED_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...students, action.payload];
    case RECEIVED_STUDENT:
      return action.payload
    case DESTROY_STUDENT:
    return [...students.filter(student =>  student.id !== action.payload.id)]
    case EDIT_STUDENT:
    return [...students.filter(student =>  student.id !== action.payload.id), action.payload]
    default:
    return students;
  }
}

export default studentsReducer;