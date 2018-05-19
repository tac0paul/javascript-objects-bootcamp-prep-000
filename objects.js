var playlist = {
  'Slowdive': 'Alison',
  'My Bloody Valentine' : 'Sometimes'
}
function updatePlaylist(playlist, artistName, songTitle)
{
  var x = Object.assign({}, playlist, {[artistName]: songTitle}))
  return x
}