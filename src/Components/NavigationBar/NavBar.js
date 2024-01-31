import React, { useState, useEffect } from 'react';
import './navBar.css';
import { NavLink } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

export default function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const getAuthStatusFromToken = (token) => {
      try {
        const decoded = jwtDecode(token);
        return !!decoded;
      } catch (error) {
        console.error('Error decoding token:', error);
        return false;
      }
    };

    const getUserRoleFromToken = (token) => {
      try {
        const decoded = jwtDecode(token);
        return decoded.role;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    };

    const token = localStorage.getItem('accessToken');
    const authStatusFromToken = getAuthStatusFromToken(token);
    const userRoleFromToken = getUserRoleFromToken(token);

    setIsAuthenticated(authStatusFromToken);
    setUserRole(userRoleFromToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
  };

  return (
    <div className='NavBarBox'>
      <div className="navBarLeft">
        <NavLink to='/'><img src="./images/BoardSphere-logos.jpeg" alt="" className="logo" /></NavLink>
      </div>
      <div className="navBarRight">
        <div className="navBarIcons">
          <div className="iconButtons">
            {isAuthenticated ? (
              <>
                <button onClick={handleLogout} className='logoutButton'>Logout</button>
                {userRole === 'owner' && (
                  <NavLink to='/adminPanel' className='adminPanelLink'>
                    Admin Panel
                  </NavLink>
                )}
              </>
            ) : (
              <>
                <NavLink to='/Login' className='logbutton'>Login</NavLink>
                <NavLink to='/SignUp' className='signinbutton'>Sign up</NavLink>
              </>
            )}
            <NavLink to='/AboutUs' className='aboutbutton'>About us</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
