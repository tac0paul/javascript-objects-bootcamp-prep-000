var playlist = new Object({'Slowdive': 'Alison', 'My Bloody Valentine':'Sometimes' })


function updatePlaylist(artistName, songTitle)
{
  return Object.assign({}, playlist, { [artistName]: 'songTitle'})
}