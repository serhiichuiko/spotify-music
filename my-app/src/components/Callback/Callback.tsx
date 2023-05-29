import React, { useEffect } from 'react';

const Callback: React.FC = () => {
  useEffect(() => {
    const handleAuth = () => {
      const params = new URLSearchParams(window.location.hash.substr(1));
      const accessToken = params.get('access_token');
      const tokenType = params.get('response_type') || '';

      // Store the access token in localStorage or pass it to your Redux store for further use
      if (accessToken) {
        localStorage.setItem('spotifyAccessToken', accessToken);
        localStorage.setItem('spotifyTokenType', tokenType);
      }

      // Redirect the user to the desired page after successful authorization
      window.location.href = '/home';
    };

    handleAuth();
  }, []);

  return (
    <div>
      <h1>Callback Page</h1>
      <p>Authorizing with Spotify...</p>
    </div>
  );
};

export default Callback;