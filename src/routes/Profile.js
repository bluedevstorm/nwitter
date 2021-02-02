import React from 'react';
import { authService } from 'fbase';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { dbService } from 'fbase';
import { useState } from 'react';

export default ({ userObj, refreshUser }) =>  {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const hostory = useHistory();
  const onLogoutClick = () => {
    authService.signOut();
    hostory.push("/");
  }
  const getMyProfile = async () => {
    const nweets = await dbService.
      collection("nweets").
      where("creatorId", "==", userObj.uid).
      orderBy("createdAt").
      get();
    console.log(nweets.docs.map((doc) => doc.data()));
  }

  useEffect(() => {
    getMyProfile();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName
      });
      refreshUser();
    }
  }

  const onChange = (event) => {
    const { target: { name, value } } = event;
    setNewDisplayName(value);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Display Name" value={newDisplayName} onChange={onChange} />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogoutClick}>Log out</button>
    </>
  )
}