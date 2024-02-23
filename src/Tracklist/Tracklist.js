import React from "react";
import Track from "../Track/Track";

function Tracklist(props) { //trying to map through searchResults (aka tracks) to create a new track for each.

    return (
        <div className="TrackList">
          {props.tracks?.map((track) => { 
            return (
              <Track
                track={track}
                key={track.id}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                isRemoval={props.isRemoval}
              />
            );
          })}
        </div>
      );
}

export default Tracklist;

