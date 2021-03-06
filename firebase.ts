// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line import/no-self-import
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAMD_DLp5dcvbgvAEvP51QSEGS0-Ifc8HE',
  authDomain: 'teamthink-c59d3.firebaseapp.com',
  projectId: 'teamthink-c59d3',
  storageBucket: 'teamthink-c59d3.appspot.com',
  messagingSenderId: '447163086793',
  appId: '1:447163086793:web:db5083903aaca362ae5a18',
  measurementId: 'G-THN5VH26DG',
};
firebase.initializeApp(firebaseConfig);
export default firebase;
