// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const OAUTHLOGIN_SUCCESS = 'OAUTHLOGIN_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FAKE_LOGIN_SUCCESS = 'FAKE_LOGIN_SUCCESS';
export const FAKE_REMEMBER_LOGIN = 'FAKE_REMEMBER_LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const SET_PAGE_LEVEL = 'SET_PAGE_LEVEL';



const fake_user = {
  "first_name": "Admin",
  "last_name": "User",
  "username": "admin",
  "email": "admin@gmail.com",
  "roles": [
    {
      "role_name": "Admin",
      "permission": [
        "Generate Ticket",
        "Manage Users",
        "View Staff Logs",
        "View Branches",
        "View Users",
        "Manage Account",
        "View Ticket History"
      ]
    }
  ]
};


export const initialState = {
    isAuthenticated: false,
    user: null,
    rolePermission: null,
    role: null,
    isLoading: false,
    token: null,
    error: null,
    isPageAdmin: false,
  };
  


  export const authReducer = (state, action) => {

    console.log(state);
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          user: action.payload,
          error: null,
        };
      case OAUTHLOGIN_SUCCESS:

      console.log(action.payload , "action.payload");
        return {
          ...state,
         isLoading: false,
          isAuthenticated: true, 
          user: action.payload.user,
          rolePermission: action.payload.user.roles.permission ,
          role: action.payload.user.roles.role_name ,
          token : action.payload.accessToken, 
          error: null
        };
      case FAKE_LOGIN_SUCCESS:

      console.log(action);
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          user: fake_user,
          rolePermission: fake_user.roles[0].permission ,
          role: fake_user.roles[0].role_name ,
          token : action.payload.token,
          error: null
        };
      case FAKE_REMEMBER_LOGIN:

        // console.log(action);
          return {
            ...state,
            isLoading: false,
            isAuthenticated: true,
            user: fake_user,
            rolePermission: fake_user.roles[0].permission ,
            role: fake_user.roles[0].role_name ,
            token : action.payload.token,
            error: null
      };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case SET_PAGE_LEVEL:

      // console.log( {
      //   ...(state !== undefined ?  state: initialState),
      //       is_page_admin: action.payload,
      //   });

      //   console.log(state);
        return {
          ...state,
          isPageAdmin: action.payload,
      };
      case LOGOUT:
        return {
          ...initialState,
        };
      
      default:
        return state;
    }
  };
  
  export default authReducer;