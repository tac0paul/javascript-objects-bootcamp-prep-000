var playlist = {
  Slow Dive: "Alison"
  
}
function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign(({playlist}), artistName, songTitle)
}