/* Close / Small Hidden-music player Window */

// "Make it half sreen" and embedd small tab as close button

function closeSong() {
  const songdetails = document.getElementById("songdetails");
  songdetails.style.display = "none";
}

function viewSong() {
  const songdetails = document.getElementById("songdetails");
  songdetails.style.display = 'block';
}

document.addEventListener('keydown', function(event){
  if(event.ctrlKey && event.key == 'c')
  {
    event.preventDefault();
    closeSong();
  } else if (event.ctrlKey && event.key == 'o'){
    event.preventDefault();
    viewSong();
  }
});

document.addEventListener('DOMContentLoaded', ()=> {
  const list = document.getElementById("playList");

  list.addEventListener('click', ()=> {
    closeSong();
  });
});

/* Full Screen functionality */

function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // Safari
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    // IE11
    element.msRequestFullscreen();
  }
}

// Function to exit fullscreen
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    // Safari
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE11
    document.msExitFullscreen();
  }
}

// Full Screen by F11 key
document.addEventListener("keydown", function (event) {
  if (event.key === "F11") {
    requestFullscreen(songdetails);
  }
});

// Fullscreen by Button (Implement it)

document.addEventListener('DOMContentLoaded', ()=> {

  const full_screen = document.getElementById("full_screen");
  // const songdetails = document.getElementById("songdetails");

  full_screen.addEventListener("click", function () {
    if (!document.fullscreenElement) 
    {
      requestFullscreen(songdetails);
      full_screen.classList.add('bi-fullscreen-exit');
      full_screen.classList.remove('bi-aspect-ratio-fill');
    } else
    {
      exitFullscreen();
      full_screen.classList.add('bi-aspect-ratio-fill');
      full_screen.classList.remove('bi-fullscreen-exit');
    }
  });
});

// More Songs functionality

function moreSongs(directorID){
  const parentSong = directorID.parentElement.parentElement;
  const more = parentSong.querySelector(".director");
  const moreByAlbum = parentSong.querySelector(".album-name");
  const hidden_songs = parentSong.querySelector(".hidden-songs");

  more.addEventListener("click", function () {
    if(hidden_songs.style.display == "none")
    {
      hidden_songs.style.display = "flex";
    }
    else
    {
      hidden_songs.style.display = "none";
    }
  });

  moreByAlbum.addEventListener("click", function () {
    if(hidden_songs.style.display == "none")
    {
      hidden_songs.style.display = "flex";
    }
    else
    {
      hidden_songs.style.display = "none";
    }
  });  
}

// Mode Changer

document.addEventListener('DOMContentLoaded', ()=> {

  const mode = document.getElementById("mode");
  const discPlay = document.getElementById("disc-play");
  const bassPlay = document.getElementById("bassPlay");

  mode.addEventListener("click", function (){
    if(discPlay.style.display == "block")
    {
      discPlay.style.display = "none";
      bassPlay.style.display = "block";     
      mode.classList.add('bi-disc-fill');
      mode.classList.remove('bi-bar-chart-line-fill');      
    }
    else
    {
      discPlay.style.display = "block";
      bassPlay.style.display = "none";
      mode.classList.remove('bi-disc-fill');
      mode.classList.add('bi-bar-chart-line-fill');
    }
  });
});