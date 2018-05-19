var playlist = {
  Slowdive: 'Alison',
}
function updatePlaylist(playlist, artistName, songTitle)
{
  var x = Object.assign({}, playlist.artistName, {[artistName]: songTitle})
  return x
}