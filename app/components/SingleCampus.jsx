import React, {Component} from 'react';
import { fetchCampus} from '../reducers/campusReducer'
import {connect} from 'react-redux'





class SingleCampus extends Component {

        componentDidMount(){
            const CampusId = Number(this.props.match.params.id)
            this.props.fetchCampus(CampusId)
          
        }
    render(){
        console.log(this.props)
        const Campus = this.props.SingleCampus
        if(Campus.length === 0){
            return ""
        } else {
        return (
            <div>
            <h3>{Campus.name} {Campus.address} </h3>
            </div>
        )
    }

    }
}


const mapStateToProps = state => {
    console.log(state)
	return {

        SingleCampus: state.campuses
            }
        }
        
	


const mapDispatchToProps = (dispatch) => {
	return {
		fetchCampus: (id) => dispatch(fetchCampus(id))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)