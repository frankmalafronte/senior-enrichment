import React, { Component } from 'react';
import {updateStudent} from '../reducers/studentReducer'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

class EditStudent extends Component {

	constructor(props){
		super(props)
		this.state = {
			firstName: '',
            lastName: '',
            email: ""
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}


	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		// console.log(this.props)
        event.preventDefault() 
        const firstName = this.state.firstName
        const lastName = this.state.lastName
        const email = this.state.email
        const id = this.props.match.params.id
        this.props.editStudent({firstName, lastName, email},id)
        this.setState({
            firstName:" ",
            lastName:" ",
            email: "" 

    })
}

	render() {
		return (
                <form onChange={this.handleChange}>
                  <h4> Update Student: </h4>
                  <label htmlFor="firstNameEntry"> First Name: </label>
                  <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="Enter First Name"
                  />
          
                  <label htmlFor="lastNameEntry"> Last Name: </label>
                  <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="Enter Last Name"
                  />
          
                  <label htmlFor="emailEntry"> Email Address: </label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    placeholder="Enter Email Address"
                  />
                  
                  <button className="submitBtn" type="submit" onClick={this.handleSubmit}>
                    Update This Student
                  </button>
                </form>
		);
	}
}


const mapDispatch = (dispatch) => {
	return {
		editStudent: (student, id) => dispatch(updateStudent(student, id))
	}
}

export default withRouter(connect(null, mapDispatch)(EditStudent))