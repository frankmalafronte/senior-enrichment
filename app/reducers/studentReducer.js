import { initialState } from './index';
import axios from 'axios';

const ADD_STUDENT = 'ADD_STUDENT';
const RECEIVED_STUDENTS = 'RECEIVED_STUDENTS';

export const receiveStudents = students => ({ type: RECEIVED_STUDENTS, payload: students });

export const fetchStudents = () => async dispatch => {
  const response = await axios.get('/api/students');
  const studentData = response.data;
  dispatch(receiveStudents(studentData));
};

// export const fetchStudent = () = async dispatch =.{
//   const response = await axios
// }

const studentsReducer = (students = initialState.students, action) => {
  switch (action.type) {
    case RECEIVED_STUDENTS:
      return action.payload;
    case ADD_STUDENT:
      return [...students, action.payload];
    default:
      return students;
  }
}

export default studentsReducer;