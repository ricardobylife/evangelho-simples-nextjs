import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../../src/components/Header';
import styled from 'styled-components';
import InstitutionalFooter from '../../src/components/Footer/institutionalFooter';
import VideoCard from '../../src/components/Cards/VideoCard';
import { useRouter } from 'next/router'


const Main = styled.div`
 .institutional{
  background-color: #f0f8ffc4;
  max-width: 980px ;
  margin: 3em auto 3em auto;
  border-radius: 6px;

 }
 .contempt{
  display: flex;
  flex-wrap: wrap;
  color: black;
  font-size: 0.7rem;
 }
 .contempt h3{
  max-width: 300px;
  height: 3.5rem;
 }
 .embeded{
  margin: auto;
  padding: 0.7rem;
  border-radius: 4px;
 }
 iframe{
  border-radius: 4px;
  border: 0.001px solid black;
  box-shadow: 0px 0px 3px 2px #0000002a;

 }
 .videoTitle{
  padding-left: 0.5rem;
 }
`;
// const importVideosURL = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId='


export async function getStaticProps(context) {
  const importVideosURL = process.env.YOUTUBE_API_PLAYLIST_ITEMS
  const apiKey = process.env.YOUTUBE_API_KEY;
  const { params } = context
  const data = await fetch(`${importVideosURL}?part=snippet&maxResults=15&playlistId=${params.pid}&${apiKey}`)

  const playlistToImport = await data.json()

  return {
    props: { playlistToImport }
  }
}

export async function getStaticPaths() {
  const playlistsURL = process.env.YOUTUBE_API_PLAYLISTS
  const apiKey = process.env.YOUTUBE_API_KEY;
  const response = await fetch(`${playlistsURL}?part=snippet&channelId=UC0lim5sJoP2UC4rZfd7-wJQ&maxResults=100&${apiKey}`)

  const data = await response.json()

  const paths = data.items.map((playlistToImport) => {
    return {
      params: {
        pid: `${playlistToImport.id}`
      }
    }
  })
  return { paths, fallback: false }
}

const PlaylistOpen = (playlistToImport) => {


  const [playlistList, setPlaylistList] = useState([]);

  useEffect(() => {
    setPlaylistList(playlistToImport.playlistToImport.items)
  }, [playlistToImport.playlistToImport.items])


  return (
    <>
      <Header />
      <Main>
        <section className="institutional">

          <div className="contempt">
            {playlistList.length === 0 && <p>Carregando...</p>}
            {playlistList.length > 0 &&
              playlistList.map((playlist) =>
                <VideoCard key={playlist.snippet.resourceId.videoId} playlist={playlist} />
              )}
          </div>
        </section>
      </Main>
      <InstitutionalFooter />
    </>
  );
};

export default PlaylistOpen;
