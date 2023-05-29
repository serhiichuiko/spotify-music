import React from 'react';


interface UserProfileProps {
    user: any
}


const UserProfile: React.FC<UserProfileProps> = ({user}) => {
    console.log('user', user);
  return (
    <div>
      <h1>User Profile</h1>
      <img src={user.images[0].url} alt="avatar" />
      <p>{user.display_name}</p>
      <a href="/savedTracks">My saved tracks</a>
    </div>
  );
};

export default UserProfile;