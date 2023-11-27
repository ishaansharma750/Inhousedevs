import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export function RequireAuth({ children }) {
  let navigate = useNavigate()
  const [isAuthenticated, setIsLoggedIn] = useState([]);

  const checkAuth = () => {
    const userToken = sessionStorage.getItem('data');
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return navigate("/") ;
  }
  return children;
}
