var playlist = {
  Slowdive: "Alison"
  My Bloody Valentine: ""
}
function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign(({playlist}), artistName, songTitle)
}