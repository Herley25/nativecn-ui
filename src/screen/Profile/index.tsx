import React from 'react';
import {ProfileView} from './views/View';
import {useProfileViewModel} from './useProfileViewModel';

export const Profile = () => {
  const {loading, error, email, date, password, handleClick} =
    useProfileViewModel();

  return (
    <ProfileView
      loading={loading}
      error={error}
      email={email}
      date={date}
      password={password}
      handleClick={handleClick}
    />
  );
};
