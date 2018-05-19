var playlist = {
  Slowdive: 'Alison',
  My BloodyValentine : 'Sometimes'
}
function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign(({playlist}), artistName, songTitle)
}