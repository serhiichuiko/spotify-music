import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import SavedTrack from '../../components/SavedTrack';

const SavedTracksContainer: React.FC = () => {
  const [savedTrack, setSavedTrack] = useState<any>(null);
  const accesToken = localStorage.getItem('spotifyAccessToken');
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(accesToken);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedTrack = await spotifyApi.getMySavedTracks();
        setSavedTrack(savedTrack);
      } catch (error) {
        console.error('Failed to fetch savedTrack:', error);
      }
    };

    fetchData();
  }, []);

  if (!savedTrack) {
    return <div>Loading tracks...</div>;
  }

  return (
    <SavedTrack savedTracks={savedTrack}/>
  );
};

export default SavedTracksContainer;