var playlist = new Object({'Slowdive': 'Alison', 'My Bloody Valentine':'Sometimes' })


function updatePlaylist(playlist, artistName, songTitle)
{
  Object.assign({}, playlist, { [artistName]: 'songTitle'})
}