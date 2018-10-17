import React, {Component} from 'react';
import { fetchStudent} from '../reducers/studentReducer'
import {connect} from 'react-redux'


// const SingleStudent = () =>{ 
// return (
//     <h3> This is the Single Student Page </h3>
// )
// }


class SingleStudent extends Component {

        componentDidMount(){
            const studentId = Number(this.props.match.params.id)
            this.props.fetchStudent(studentId)
          
        }
    render(){
        // console.log(this.props)
        const student = this.props.SingleStudent
        if(student.length === 0){
            return ""
        } else {
        return (
            <div>
            <h3>Name:{student.firstName} {student.lastName} EMAIL: {student.email} </h3>
            </div>
        )
    }

    }
}


const mapStateToProps = state => {
    // console.log(state)
	return {

        SingleStudent: state.students
            }
        }
        
	


const mapDispatchToProps = (dispatch) => {
	return {
		fetchStudent: (id) => dispatch(fetchStudent(id))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)

// export default SingleStudent