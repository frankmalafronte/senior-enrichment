import React, { Component} from 'react';
import { fetchStudents, deleteStudent} from '../reducers/studentReducer';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import StudentForm from './StudentForm'



class StudentList extends Component {
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
        const students = this.props.students.map((student) =>
        <li key = {student.id}> <Link to = {`/students/${student.id}`}> {student.firstName}</Link> 
      <img style={{ width: 300, height: 150 }} src={student.imageUrl} />
      <button onClick = {() =>this.handleClick(student.id)}> X </button>
        </li>)
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

const mapDispatchToProps = dispatch =>{
    return {
    fetch: () => dispatch(fetchStudents()),
    destroy: (studentId) => dispatch(deleteStudent(studentId))
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);