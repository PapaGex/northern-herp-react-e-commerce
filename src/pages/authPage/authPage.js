import React from 'react';


import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './authPage.styles.scss';

const AuthPage = () => (
    <>
        <div className='authentication'>
            <SignIn />
            <SignUp />
        </div>
    </>
);

export default AuthPage;


//firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         // User is signed in
//         var email = user.email;
//         // ...
//     } else {
//         // User is not signed in
//         // ...
//     }
// });
// firebase.auth().signInWithEmailAndPassword(email, password);

//