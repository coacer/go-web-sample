import firebase from '../plugins/firebase';

export const createUserFb = (email: string, password: string): Promise<any> => {
  return firebase
    .app()
    .auth()
    .createUserWithEmailAndPassword(email, password);
};
