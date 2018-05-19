var playlist = { 
  artistName: "Slowdive",
  songTitle: "Alison"
}

function updatePlaylist(playlist,artistName, songTitle)
{
  return Object.assign({},playlist, artistName,songTitle)
}