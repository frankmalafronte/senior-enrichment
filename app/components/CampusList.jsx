import React, { Component} from 'react';
import { fetchCampuses } from '../reducers/campusReducer';
import { connect } from 'react-redux';



class CampusList extends Component {
   
    componentDidMount(){
        this.props.fetchCampuses()
    }


    render() { 
        const campuses = this.props.campuses.map((campus) =>
        <li key = {campus.id}>{campus.name} </li>)
        return (
        <ul> {campuses} </ul>
        )}
}

const mapStateToProps = ({campuses}) => ({
    campuses
})

const mapDispatchToProps = {fetchCampuses}
 
export default connect(mapStateToProps, mapDispatchToProps)(CampusList)