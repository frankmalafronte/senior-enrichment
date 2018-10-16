import React from 'react'
import StudentList from './StudentList.jsx'
import {Route, Link, Switch} from 'react-router-dom'
import CampusList from './CampusList.jsx'




const Root = () => {
  return (
    
    <div>
      <nav>
        Welcome!
        <Link to = '/students'>Students</Link>
        <Link to = '/campuses'>Campuses</Link>
      </nav>
      <main>
        <Route exact path = "/students" component = {StudentList} />
        <Route exact path = "/campuses" component = {CampusList} />
      </main>
    </div>
  )
}

export default Root
