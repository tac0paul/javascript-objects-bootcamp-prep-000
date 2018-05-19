var playlist = { 
  Slowdive: 'songTitle', 
  My Bloody Valentine: 'songTitle2'}


function updatePlaylist(playlist,artistName, songTitle)
{
  return Object.assign({},playlist, artistName,songTitle)
}