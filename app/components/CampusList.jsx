import React, { Component} from 'react';
import { fetchCampuses, deleteCampus } from '../reducers/campusReducer';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import CampusForm from './CampusForm'



class CampusList extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
   
    componentDidMount(){
        this.props.fetch()
    }

    handleClick(id){
        this.props.destroy(id)
    }




    render() { 
        const campuses = this.props.campuses.map((campus) =>
        <li key = {campus.id}> <Link to ={`/campus/${campus.id}`}>{campus.name} </Link> 
        <button onClick = {() => this.handleClick(campus.id)}> X </button>
        </li>)
        return (
        <div>
        <ul> {campuses} </ul>
        <CampusForm />
        </div>
        )}
}

const mapStateToProps = ({campuses}) => ({
    campuses
})

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => dispatch(fetchCampuses()),
        destroy: (campusId) => dispatch(deleteCampus(campusId))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CampusList)