

// Async Action Creator

import getEnvVars from '../../config/env';
const { apiUrl } = getEnvVars();

class AuthActions  {

 

  loginUser = async (dispatch, email, password) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
      const response = await fetch('https://reqres.in/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: email,
              password: password,
          }),
      });
      
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      if (response.ok) {
         const data = await response.json();

          dispatch({
            type: 'FAKE_LOGIN_SUCCESS',
            payload: data,
          });
  
      }
     

    } catch (error) {
      console.log(error);
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error,
      });
     
    }
  }

  logoutUser = async (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    });
  }

  isLoggedIn = async (dispatch) => {
    // dispatch({
    //   type: 'SET_PAGE_LEVEL'
    // });
  }
  isAdminPage = async (dispatch , boolean) => {
    dispatch({
      type: 'SET_PAGE_LEVEL',
      payload:boolean,
    });
  }
  rememberLogin = async (dispatch , token) => {

    dispatch({ type: 'LOGIN_REQUEST' });

    const response = await fetch('https://reqres.in/api/users/2', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      });
      
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: 'FAKE_REMEMBER_LOGIN',
          payload: {token : token},
        });

      }
   
  }

  userPermission = (permission = "" , auth) => {
    try {
      if ((auth?.rolePermission).includes(permission)) {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Logout failed:', error);
      return false;
    }
  };

  userRole =  (role_name = "" , auth) => {
    try {
      if (auth?.role === role_name) {
        return true;
      }

      return false;
    
      // });
    } catch (error) {
      console.error('Logout failed:', error);
      return false;
    }
  };
 
}

export default AuthActions;