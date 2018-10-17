import React, { Component} from 'react';
import { fetchStudents } from '../reducers/studentReducer';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import StudentForm from './StudentForm'


class StudentList extends Component {
   
    componentDidMount(){
        this.props.fetchStudents()
    }


    render() { 
        // console.log(this.props)
        const students = this.props.students.map((student) =>
        <li key = {student.id}> <Link to = {`/students/${student.id}`}> {student.firstName}</Link> </li>)
        return (
            <div>
        <ul> {students} </ul>
        <StudentForm />
        </div>
        )}
}

const mapStateToProps = ({students}) => ({
    students
})

const mapDispatchToProps = {fetchStudents}
 
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);