import { initialState } from './index';
import axios from 'axios';

const ADD_CAMPUS = 'ADD_CAMPUS';
const RECEIVED_CAMPUSES = 'RECEIVED_CAMPUSES';
const RECEIVED_CAMPUS = 'RECEIVED_CAMPUS'
const DESTROY_CAMPUS = 'DESTROY_CAMPUS'

export const receiveCampuses = campuses => ({ type: RECEIVED_CAMPUSES, payload: campuses });
export const addCampus = newCampus => ({type: ADD_CAMPUS, payload: newCampus})
export const receiveCampus = campus => ({type: RECEIVED_CAMPUS, payload: campus})
export const destroyCampus = campusToDestroy => ({type: DESTROY_CAMPUS, payload: campusToDestroy})

export const fetchCampuses = () => async dispatch => {
  const response = await axios.get('/api/campus');
  const campusData = response.data;
  dispatch(receiveCampuses(campusData));
};

export const fetchCampus = (id) => async dispatch => {
  const response = await axios.get(`/api/campus/${id}`)
  const campusData = response.data
  console.log(campusData)
  dispatch(receiveCampus(campusData))
}

export const makeCampus = (campus) => async dispatch => {
  const response = await axios.post('api/campus', campus)
  const campusData = response.data
  dispatch(addCampus(campusData))
}

export const deleteCampus = (id) => async dispatch =>{
  const response = await axios.delete(`/api/campus/${id}`)
  const campusData = response.data
  dispatch(destroyCampus(campusData))
}



const campusesReducer = (state = initialState.campuses, action) => {
  switch (action.type) {
    case RECEIVED_CAMPUSES:
      return action.payload;
    case ADD_CAMPUS:
    return  [...state, action.payload]
    case RECEIVED_CAMPUS:
      return action.payload
      case DESTROY_CAMPUS:
      return [...state.filter(campus => campus.id !== action.payload.id)]
    default:
      return state;
  }
}

export default campusesReducer;