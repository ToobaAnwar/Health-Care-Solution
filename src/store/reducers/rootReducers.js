import authReducers from './authReducers';
import commentReducers from './commentReducers';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducers = combineReducers({
    auth: authReducers,
    comment: commentReducers,
    firestore: firestoreReducer,    // by this we display db info in our website 
    firebase: firebaseReducer,      // by this we use fb auth service 

})

export default rootReducers;