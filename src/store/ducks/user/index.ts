import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';
import {environment} from '../../../environment/environment';

//pega o token e usupario encontrados no localstorage
const token = localStorage.getItem(environment.REACT_APP_LOCAL_STORAGE_USER);
const loggedUser: UserState = JSON.parse(localStorage.getItem("loggedUser") as any);

const INITIAL_STATE: UserState = {
  user: {
    id: '',
    token: '',
    email: '',
    name: '',
  },
};

//se o token existir seta o usuário logado como estado inicial de usuário
if (token) {
  INITIAL_STATE.user = loggedUser.user;
}

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  action,
) => {
  const updatedUserState = state;

  switch (action.type) {
    case UserTypes.UPDATE_USER:
      updatedUserState.user = action.payload.user;
      // localStorage.setItem(
      //   environment.REACT_APP_LOCAL_STORAGE_USER_AUTH,
      //   JSON.stringify(),
      // );
      return { ...state, ...updatedUserState };

    case UserTypes.REMOVE_USER:
      // localStorage.removeItem(
      //   environment.REACT_APP_LOCAL_STORAGE_USER_AUTH,
      // );
      localStorage.removeItem("userLogin");
      localStorage.removeItem(environment.REACT_APP_LOCAL_STORAGE_USER);

      INITIAL_STATE.user = {
        id: '',
        token: '',
        email: '',
        name: '',
      }

      return { ...state, ...INITIAL_STATE };

    default:
      return state;
  }
};

export default reducer;
