var playlist = new Object({'artistName': 'songTitle'})


function updatePlaylist(playlist, artistName, songTitle)
{
   const updatedPlaylist= Object.assign({artistName: songTitle}, artistName)
   return updatedPlaylist
}