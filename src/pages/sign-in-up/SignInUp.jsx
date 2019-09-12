import React from 'react'
import './SignInUp.scss';
import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

const SignInUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInUp
