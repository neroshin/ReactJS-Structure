// authContext.js
import React, { createContext, useEffect , useReducer , useContext, useLayoutEffect } from 'react';
// import axiosInstance from '../../../axiosInstance';
import { useNavigate } from 'react-router-dom';
// import { getCookie } from './getCookie'
import {propertyStateReducer , propertyInitialState} from '../store/reducerService/propertyStateReducer';
import AuthActions from '../store/actions/authActions';
import getEnvVars from '../config/env';
export const AuthContext = createContext();


const { apiUrl } = getEnvVars();


export const DataContext = createContext();

export const DataService = ({ children }) => {
 
 



    /* Property Action */
    const [propertyState, propertyDispatch] = useReducer(propertyStateReducer, propertyInitialState);

    const addProperty = (data) => propertyDispatch({type: 'ADD_PROPERTY',payload: data});
    const removeProperty = (id) => propertyDispatch({type: 'REMOVE_PROPERTY',payload: id});
    const renderDataProperty = (data) => propertyDispatch({type: 'RENDER_DATA',payload: data});
    

  return (
    <DataContext.Provider value={
            {
                property  : {
                    ... {
                        list : propertyState
                    } , 
                    addProperty,
                    removeProperty,
                    renderDataProperty
                }
            }
        }
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
