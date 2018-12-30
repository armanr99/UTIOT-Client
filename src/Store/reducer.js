const initialState = {
    authenticated: false,
  };
  
  export default function reducer (state = initialState, action) {
    switch (action.type) {
      case 'AUTHENTICATE_THE_USER':
        return {
          authenticated: true,
        };
      case 'DEAUTHENTICATE_THE_USER':
        return {
          authenticated: false,
        };
      default:
        return state;
    }
  }
  