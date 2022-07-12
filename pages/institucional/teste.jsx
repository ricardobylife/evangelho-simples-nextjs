var playlistList = {
  etag: 'L3O9Tx3EU4Pxl6kJakOcM1mZ67U',
  id: 'PLuCaaySadmfY9UcKD1JF7w_lbSuw2nguo',
  kind: 'youtube#playlist'
};

const data = playlistList.map((playlist) => {
  playlist = playlist;
  return playlist.id;
});

console.log(data);
