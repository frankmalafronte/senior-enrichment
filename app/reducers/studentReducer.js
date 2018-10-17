import { initialState } from './index';
import axios from 'axios';

const ADD_STUDENT = 'ADD_STUDENT';
const RECEIVED_STUDENTS = 'RECEIVED_STUDENTS';
const RECEIVED_STUDENT= 'RECEIVED_STUDENT'

export const receiveStudents = students => ({ type: RECEIVED_STUDENTS, payload: students });
export const receiveStudent = student => ({type: RECEIVED_STUDENT, payload: student})




export const fetchStudents = () => async dispatch => {
  const response = await axios.get('/api/students');
  const studentData = response.data;
  console.log(studentData)
  dispatch(receiveStudents(studentData));
};

export const fetchStudent = (id) => async dispatch => {
  const response = await axios.get(`/api/students/${id}`)
  const studentData = response.data
    dispatch(receiveStudent(studentData))
}

const studentsReducer = (students = initialState.students, action) => {
  switch (action.type) {
    case RECEIVED_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...students, action.payload];
    case RECEIVED_STUDENT:
    console.log(action.payload)
      return action.payload
    default:
      return students;
  }
}

export default studentsReducer;