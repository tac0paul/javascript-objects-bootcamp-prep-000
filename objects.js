var playlist = { 
  artistName: "Slowdive"

function updatePlaylist(playlist,artistName, songTitle)
{
  return Object.assign({},playlist, artistName,songTitle)
}