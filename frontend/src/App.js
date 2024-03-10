import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import React from 'react';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Visitor from './Components/Visitor'
import Counsellor from './Components/Counsellor'
import Home from './Components/Home'
import Student from './Components/Student'
import Courses from './Components/Courses'
import Appointment from './Components/Appointment';
import FetchRegistrations from './Components/FetchRegistrations'
import About from './Components/About'
function App()
{
  return <React.Fragment>
    <Header>
      <Header/>
    </Header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/SignUp" element={<SignUp/>}exact/>
        <Route path="/SignIn" element={<SignIn/>}exact/>
        <Route path="/Student" element={<Student/>}exact/>
        <Route path="/Courses" element={<Courses/>}exact/>
        <Route path="/Visitor" element={<Visitor/>}exact/>
        <Route path="/Counsellor" element={<Counsellor/>}exact/>
        <Route path="/Appointment" element={<Appointment/>}exact/>
        <Route path="/FetchRegistrations" element={<FetchRegistrations/>}exact/>
        <Route path="/About" element={<About/>}exact/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;