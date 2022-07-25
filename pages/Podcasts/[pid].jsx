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
  margin: 2em auto 0 auto;
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
const importVideosURL = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=200&playlistId='
const apiKey = 'key=AIzaSyDx49X5n8vh4iZsFSIZD9mJMZ1SJZXmybc';


const PlaylistOpen = () => {
  const router = useRouter()
  const { pid } = router.query
  const playlistToImport = pid
  const [playlistList, setPlaylistList] = useState([]);

  const getPlaylistList = async url => {
    const res = await fetch(url);
    const data = await res.json();

    setPlaylistList(data.items);
  };
  useEffect(() => {
    const playlistListUrl = `${importVideosURL}${playlistToImport}&${apiKey}`;

    getPlaylistList(playlistListUrl);
  }, [playlistToImport]);

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
