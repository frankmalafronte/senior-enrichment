import React, { Component } from 'react';
import {connect} from 'react-redux'
import {makeStudent} from '../reducers/studentReducer'

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName :' ',
            lastName:" ",
            email:" "
            }
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
    }

handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit(event){
    event.preventDefault()
    const firstName = this.state.firstName
    const lastName = this.state.lastName
    const email = this.state.email
    this.props.post({firstName, lastName, email})
    this.setState({
        firstName:" ",
        lastName:" ",
        email:" "
    })
}

render(){
    return (
        <form onChange ={this.handleChange}>
        <h3> Add a new Student: </h3>
        <label htmlFor="firstNameEntry"> Student First Name: </label>
                    <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="Enter Student Name" />
        <label htmlFor="nameEntry"> Student Last Name: </label>
                    <input
                    type="text"
                     name="lastName"
                    value={this.state.lastName}
                    placeholder="Enter Student Name" />
        <label htmlFor="emailEntry"> Email Address: </label>
                    <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Enter Email Address" />
                <button className="submitBtn" type="submit" onClick={this.handleSubmit}>Submit New Student</button>
        </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        post: (newStudent) => dispatch(makeStudent(newStudent)),
    }
}

const connectedStudentForm = connect(null, mapDispatchToProps)(StudentForm)

export default connectedStudentForm










