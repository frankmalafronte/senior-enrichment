import React from 'react'
import StudentList from './StudentList.jsx'
import {Route, Link, Switch} from 'react-router-dom'
import CampusList from './CampusList.jsx'
import SingleCampus from './SingleCampus.jsx'
import SingleStudent from './SingleStudent.jsx'




const Root = () => {
  return (
    
    <div>
      <nav>
        Welcome!
        <Link to = '/students'>Students</Link>
        <Link to = '/campus'>Campuses</Link>
      </nav>
      <main>
        <Route exact path = "/students" component = {StudentList} />
        <Route exact path = "/campus" component = {CampusList} />
        <Route exact path = "/campus/:id" component = {SingleCampus} />
        <Route exact path = "/students/:id" component = {SingleStudent} />
      </main>
    </div>
  )
}

export default Root
