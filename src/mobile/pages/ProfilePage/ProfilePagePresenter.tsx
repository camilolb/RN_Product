import React from 'react';
import {ProfilePageComponent} from './ProfilePageComponent';
import {SessionStorageType, useSession} from '../../../core/frameworks/jotai';

// type NavigationScreenProps = NativeStackScreenProps<
//   PrivateStackParamList,
//   'ProfilePage'
// >;

// type Props = NavigationScreenProps;

export function ProfilePagePagePresenter() {
  const [sessionInformation] = useSession();
  const {user} = sessionInformation as SessionStorageType;

  const onHandleEditProfile = () => {
    console.log('TODO');
  };

  console.log('user', user.Email);

  return (
    <ProfilePageComponent
      onHandleEditProfile={onHandleEditProfile}
      userInformation={user}
    />
  );
}
