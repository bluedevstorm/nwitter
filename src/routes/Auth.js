import React from 'react';
import { authService } from 'fbase';
import { firebaseInstance } from '../fbase';
import AuthForm from 'components/AuthForm';

const Auth = () => {
  const onSocialClick = async (event) => {
    const { target: { name, value } } = event;
    let provider;
    try {
      if (name === 'google') {
        provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (name === 'github') {
        provider = new firebaseInstance.auth.GithubAuthProvider();
      }
      const data = await authService.signInWithPopup(provider);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <AuthForm />
      <div>
        <button name="google" onClick={onSocialClick}>Continue with Goolge</button>
        <button name="github" onClick={onSocialClick}>Continue with Github</button>
      </div>
    </div>
  )
}

export default Auth;