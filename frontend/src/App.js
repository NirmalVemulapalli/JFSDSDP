import React from 'react';
import './Components/ButtonStyle.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import AdminDashboard from './Components/AdminDashboard';
import EducatorDashboard from './Components/EducatorDashboard';
import CitizenDashboard from './Components/CitizenDashboard';
import Student from './Components/Student';
import Visitor from './Components/Visitor';
import ContactUs from "./Components/ContactUs";
import Appointment from './Components/Appointment';
import FetchRegistrations from './Components/FetchRegistrations';
import About from './Components/About';


function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          {/* General Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />

          {/* Specific Role Dashboards */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/educator-dashboard" element={<EducatorDashboard />} />
          <Route path="/citizen-dashboard" element={<CitizenDashboard />} />

          {/* Other Components */}
          <Route path="/student" element={<Student />} />
          <Route path="/visitor" element={<Visitor />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/fetch-registrations" element={<FetchRegistrations />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}
export default App;
