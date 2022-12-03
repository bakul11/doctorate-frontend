import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgetPassword from './Componets/Authentication/ForgetPassword/ForgetPassword';
import NewPassword from './Componets/Authentication/ForgetPassword/NewPassword';
import Login from './Componets/Authentication/Login/Login';
import Register from './Componets/Authentication/Register/Register';
import NoMatch from './Componets/NoMatch/NoMatch';
import Appointment from './Componets/Pages/Appointment/Appointment';
import BlogPage from './Componets/Pages/BlogPage/BlogPage';
import Contact from './Componets/Pages/Contact/Contact';
import BlogDetails from './Componets/Pages/Home/Blog/BlogDetails';
import Home from './Componets/Pages/Home/Home';
import ServicesDetails from './Componets/Pages/Home/Services/ServicesDetails';
import MyBookingAppointment from './Componets/Pages/MyBookingAppointment/MyBookingAppointment';
import ServicePage from './Componets/Pages/ServicePage/ServicePage';
import Profile from './Componets/Profile/Profile';
import Protected from './Componets/Protected/Protected';
import ScrollToTop from './Componets/ScrollToTop/ScrollToTop';
import Footer from './Componets/Shared/Footer/Footer';
import Navbar from './Componets/Shared/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* All Pages Start */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/services' element={<ServicePage />}></Route>
        <Route path='/blog' element={<BlogPage />}></Route>
        <Route path='/booking' element={<MyBookingAppointment />}></Route>
        <Route path='/appointment' element={
          <Protected>
            <Appointment />
          </Protected>
        }></Route>

        {/* All Details Pages  */}
        <Route path='/blogDetails/:id' element={<BlogDetails />}></Route>
        <Route path='/service-details/:id' element={
          <Protected>
            <ServicesDetails />
          </Protected>
        }></Route>

        {/* Authentication User */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword />}></Route>
        <Route path='/resetNewPassword' element={<NewPassword />}></Route>

        {/* No Match Pages  */}
        <Route path='*' element={<NoMatch />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;