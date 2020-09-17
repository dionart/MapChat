import { environment } from '../environment/environment';

const {
  REACT_APP_LOCAL_STORAGE_USER,
} = environment;

const userAuth = {
  token: localStorage.getItem(REACT_APP_LOCAL_STORAGE_USER)
  || '',
};

export const isAuthenticated = () => {
    userAuth.token = String(
      JSON.parse(userAuth.token),
    );
    if (userAuth.token !== '') {
      return true;
    }
    return false;
};


export const getToken = () => {
    userAuth.token = String(
      JSON.parse(userAuth.token),
    );
    if (userAuth.token !== '') {
      return userAuth.token;
    }
    return '';
};
