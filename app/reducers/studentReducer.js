import { initialState } from './index';
import axios from 'axios';

const ADD_STUDENT = 'ADD_STUDENT';
const RECEIVED_STUDENTS = 'RECEIVED_STUDENTS';
const RECEIVED_STUDENT = 'RECEIVED_STUDENT'

export const receiveStudents = students => ({ type: RECEIVED_STUDENTS, payload: students });
export const receiveStudent = Student => ({type: RECEIVED_STUDENT, payload: Student})
export const addStudent = newStudent => ({type: ADD_STUDENT, payload: newStudent})



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
  console.log(student)
  const response = await axios.post('/api/students', student)
  const studentData = response.data
  dispatch(addStudent(studentData))
}

const studentsReducer = (state = initialState.students, action) => {
  console.log(action)
  switch (action.type) {
    case RECEIVED_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...state, action.payload];
    case RECEIVED_STUDENT:
      return action.payload
    default:
      return state;
  }
}

export default studentsReducer;