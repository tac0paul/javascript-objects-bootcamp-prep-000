var playlist = { 
  "Slowdive": "Alison",
  "My Bloody Valentine": "Sometimes"
}

function updatePlaylist(playlist,artistName, songTitle)
{
  return Object.assign({}, artistName.songTitle = songTitle);
}