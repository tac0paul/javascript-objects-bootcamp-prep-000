var playlist = new Object({artistName: 'songTitle'})


function updatePlaylist(playlist, artistName, songTitle)
{
  var playlistUpdate Object.assign({},playlist, {artistName: 'songTitle' })
  return playlistUpdate
}