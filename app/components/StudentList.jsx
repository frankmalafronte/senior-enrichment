import React, { Component} from 'react';
import { fetchStudents } from '../reducers/studentReducer';
import { connect } from 'react-redux';



class StudentList extends Component {
   


    componentDidMount(){
        this.props.fetchStudents()
    }


    render() { 
        const students = this.props.students.map((student) =>
    <li key = {student.id}>{student.firstName} </li>)
        return (
        <ul> {students} </ul>
        )}
}

const mapStateToProps = ({students}) => ({
    students
})

const mapDispatchToProps = {fetchStudents}
 
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);