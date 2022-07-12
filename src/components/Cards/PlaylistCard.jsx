import React from 'react'

const playlistUrl = 'https://www.youtube.com/embed/videoseries?list='

const PlaylistCard = ({ playlist }) => {
  return (
    <div>
      <div>
        <h2>{`${playlist.snippet.title}`}</h2>
      </div>
      <div className='embeded'>
        <iframe src={`${playlistUrl}${playlist.id}`}></iframe>

      </div>
    </div>

  )
}

export default PlaylistCard