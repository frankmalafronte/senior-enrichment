import { initialState } from './index';
import axios from 'axios';

const ADD_CAMPUS = 'ADD_CAMPUS';
const RECEIVED_CAMPUSES = 'RECEIVED_CAMPUSES';


export const receiveCampuses = campuses => ({ type: RECEIVED_CAMPUSES, payload: campuses });

export const fetchCampuses = () => async dispatch => {
  const response = await axios.get('/api/campus');
  const campusData = response.data;
  dispatch(receiveCampuses(campusData));
};

const campusesReducer = (campuses = initialState.campuses, action) => {
  switch (action.type) {
    case RECEIVED_CAMPUSES:
      return action.payload;
    case ADD_CAMPUS:
      return [...campuses, action.payload];
    default:
      return campuses;
  }
}

export default campusesReducer;