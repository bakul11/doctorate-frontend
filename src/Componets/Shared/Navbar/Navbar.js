import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useActiveUser from '../../../Hooks/useActiveUser';
import logo from '../../../images/head-logo.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {
    const [user] = useActiveUser();
    const navigate = useNavigate();

    //Handle Logout
    const handleLogout = () => {
        toast.success('Logout success!');
        localStorage.removeItem('token');
        navigate('/')
    }



    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light shadow-sm mainNavbard">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="Website Logo" className='img-fluid' style={{ height: '50px' }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav customMenu">
                            <li className="nav-item">
                                <Link className="nav-link " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/appointment">Appointment</NavLink>
                            </li>
                        </ul>
                        <div className="login-profile justify-content-end">
                            {
                                user?.email ? <>
                                    <li className="nav-item dropdown" style={{ listStyle: 'none' }}>
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={user?.profile} alt={user?.userName} className='img-fluid rounded-pill' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                                            <hr />
                                            <li><NavLink className="dropdown-item" to="/booking">My Booking</NavLink></li>
                                            <hr />
                                            <li><button className="btn" onClick={handleLogout}>Logout</button></li>
                                        </ul>
                                    </li>
                                </> : <NavLink className="nav-link btn btn-danger text-light" aria-current="page" to="/login">Login</NavLink>
                            }

                        </div>
                    </div>

                </div>
            </nav>
            <ToastContainer />
        </section>
    );
};

export default Navbar;