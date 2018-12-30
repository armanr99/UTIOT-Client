export const auth = store => next => action => {

    if (action.type === 'AUTHENTICATE_THE_USER') {
      let token = localStorage.getItem('token');

      fetch('/api/auth/validateToken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: token })
      })
        .then(function (response) {
          if (!response.ok) {
            localStorage.removeItem('token');
            store.dispatch( {type: 'DEAUTHENTICATE_THE_USER'})
            throw new Error('Token is invalid');
          }
        })
        .catch(function (err) {
            console.log(err);
        })
    }
    return next(action);
  };
  