import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import UserProfile from '../../components/UserProfile';

const UserProfileContainer: React.FC = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const accesToken = localStorage.getItem('spotifyAccessToken');
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(accesToken);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await spotifyApi.getMe();
        setUserProfile(user);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchData();
  }, []);

  if (!userProfile) {
    return <div>Loading user profile...</div>;
  }

  return (
    <UserProfile user={userProfile}/>
  );
};

export default UserProfileContainer;