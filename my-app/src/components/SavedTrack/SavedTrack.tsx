import React from 'react';


interface SavedTrackProps {
    savedTracks: any
}


const SavedTrack: React.FC<SavedTrackProps> = ({savedTracks}) => {
    console.log('savedTracks', savedTracks);
  return (
    <div>
      <h1>My Saved Tracks</h1>
      {
        savedTracks.items.map((item: any, index: number) => (
            <div key={index}>
                {
                    item.track.external_ids.isrc.startsWith('RU') ? <p>GAVNO</p> : <p>TOP</p>
                }
                <a href={item.track.external_urls.spotify}>{item.track.name}</a>
            </div>
            
        ))
      }
    </div>
  );
};

export default SavedTrack;