import React from 'react'

const videoUrl = 'https://www.youtube.com/embed/'

const VideoCard = ({ playlist }) => {
  return (
    <div>

      <div className='embeded'>
        <iframe src={`${videoUrl}${playlist.snippet.resourceId.videoId}`}></iframe>

      </div>
      <div className='videoTitle'>
        <h3>{`${playlist.snippet.title}`}</h3><p>{`${playlist.snippet.publishedAt}`}</p>

      </div>
    </div>

  )
}

export default VideoCard