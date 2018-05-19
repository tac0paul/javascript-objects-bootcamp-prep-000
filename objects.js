var playlist = new Object({aristName: 'songTitle'})


function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign({},playlist, {artistName: 'songTitle' })
}