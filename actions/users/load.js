// actions/users/load.js
import { AsyncStorage } from 'react-native';
export const USER_LOADED_FROM_STORAGE = 'USER_LOADED_FROM_STORAGE';

export default () => {
  return (dispatch) => {
    AsyncStorage.getItem('chatUser')
      .then((result) => {
        const user = JSON.parse(result);
        if (!!user) Actions.chatRoom();
        console.log(user);
        dispatch({
          type: USER_LOADED_FROM_STORAGE,
          payload: user
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
