// authContext.js
import React, { createContext, useEffect , useReducer , useContext, useLayoutEffect } from 'react';
// import axiosInstance from '../../../axiosInstance';
import { useNavigate } from 'react-router-dom';
// import { getCookie } from './getCookie'
import {authReducer , initialState} from '../store/reducers/authReducer';
import AuthActions from '../store/actions/authActions';
import getEnvVars from '../config/env';
export const AuthContext = createContext();

const { apiUrl } = getEnvVars();


export const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  const authActions = new AuthActions();
  const login = async (email, password) => authActions.loginUser(authDispatch, email, password);
  // Logout function
  const logout = async () => {
    removeToken();
    authActions.logoutUser(authDispatch);
   
  };
  
  const hasCan = (permission = "" ) => authActions.userPermission(permission , authState);
  const isRole = (role = "" ) => authActions.userRole(role  , authState);

  useEffect(() => {
    if (authState.token !== null && authState.token !== "")localStorage.setItem('accessToken', authState.token);
  } , [login]);

  
  useLayoutEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token !== null && token !== "")authActions.rememberLogin(authDispatch, token);
  } , []);


  const removeToken  = async () => {
  
    try {
      await localStorage.removeItem("accessToken");
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  const is_loggedIn  = async () => authActions.isLoggedIn(authDispatch, token);
  const is_admin_page  = async (boolean) =>authActions.isAdminPage(authDispatch, boolean)

  return (
    <AuthContext.Provider value={{authState : { ...authState , login , logout , hasCan , isRole , is_admin_page }}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
