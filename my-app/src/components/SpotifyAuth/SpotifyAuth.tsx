import React from 'react';

const SpotifyAuth: React.FC = () => {
  console.log(process.env);
  const handleLogin = () => {
    const { REACT_APP_SPOTIFY_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;
    const scopes = ['user-read-private', 'user-read-email']; // Add any additional scopes as needed
    const redirectUri = REACT_APP_REDIRECT_URI as string;
    const clientId = REACT_APP_SPOTIFY_CLIENT_ID as string;

    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`;

    window.location.href = url;
  };

  return (
    <div>
      <h1>Spotify Authorization Example</h1>
      <button onClick={handleLogin}>Log in with Spotify</button>
    </div>
  );
};

export default SpotifyAuth;