import React, { Component } from 'react';
import {connect} from 'react-redux'
import {makeCampus} from '../reducers/campusReducer'

class CampusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:' ',
            address:' '
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
    const name = this.state.address
    const address = this.state.address
    this.props.post({name, address})
    this.setState({
        name:" ",
        address: " "
    })
}

render(){
    // console.log(this.state)
    return (
        <form onChange ={this.handleChange}>
        <h3> Add a new Campus: </h3>
        <label htmlFor="nameEntry"> Campus Name: </label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="Enter Campus Name" />
                <label htmlFor="addressEntry"> Campus Address: </label>
                <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    placeholder="Enter Campus Address" />
                <button className="submitBtn" type="submit" onClick={this.handleSubmit}>Submit New Campus</button>
        </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        post: (newCampus) => dispatch(makeCampus(newCampus)),
    }
}

const connectedCampusForm = connect(null, mapDispatchToProps)(CampusForm)

export default connectedCampusForm










