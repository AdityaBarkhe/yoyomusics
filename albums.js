// Music Array
const music = new Audio();

const songs =
[
    {
        id: 1,
        songName: "Love dose",
        poster: "posters/Love Dose.jpg",
        song: "audio/Love Dose - Honey Singh.mp3"
    },
    {
        id: 2,
        songName: "Blue Eyes",
        poster: "posters/Blue Eyes.jpeg",
        song: "audio/Blue Eyes - Honey Singh.mp3"
    },
    {
        id: 3,
        songName: "Birthday Bash",
        poster: "posters/Birthday Bash.jpg",
        song: "audio/Baby Ka Hai Birthday Bash - Yo Yo Honey Singh.mp3"
    },
    {
        id: 4,
        songName: "Desi Kalakar",
        poster: "posters/Desi Kalakar.jpeg",
        song: "audio/Desi Kalakaar_64-(PagalWorld).mp3"
    },
    {
        id: 5,
        songName: "One Bottle Down",
        poster: "posters/One Bottle Down.jpg",
        song : "audio/One Bottle Down - Yo Yo Honey Singh.mp3"
    },
    {
        id: 6,
        songName: "Dheere Dheere",
        poster: "posters/Dheere_Dheere.jpg",
        song: "audio/Dheere Dheere Yo Yo Honey Singh 128 Kbps.mp3"
    },
    {
        id: 7,
        songName: "Vigdiyan Heeran",
        poster: "posters/Vigdiyan Heeran.jpg",
        song : "audio/Vigdiyan Heeran-(PagalWorld).mp3"
    },
    {
        id: 8,
        songName: "Together forever",
        poster: "posters/Together forever.jpg",
        song : "audio/Together Forever(PagalWorld.com.cm).mp3"
    },
    {
        id: 9,
        songName: "Tujhpe pyaar",
        poster: "posters/Tujhpe pyaar.webp",
        song: "audio/Baby Ka Hai Birthday Bash - Yo Yo Honey Singh.mp3"
    },
    {
        id: 8,
        songName: "Habibti",
        poster: "posters/Habibti.jpg",
        song: "audio/Love Dose - Honey Singh.mp3"
    },
    {
        id: 9,
        songName: "Kalaastar",
        poster: "posters/Kalaastar.webp",
        song: "audio/Kalaastar---Honey-Singh_192(PagalWorld).mp3"
    },
    {
        id: 10,
        songName: "Together forever",
        poster: "posters/Together forever.jpg",
        song : "audio/Together Forever(PagalWorld.com.cm).mp3"
    },
    {
        id: 11,
        songName: "Kuley Kuley",
        poster: "posters/Kuley Kuley.webp",
        song: "audio/Desi Kalakaar_64-(PagalWorld).mp3"
    },
    {
        id: 12,
        songName: "Shor Machega",
        poster: "posters/Shor Machega.jpg",
        song : "audio/Shor Machega(PagalWorld.com.cm).mp3"
    },
    {
        id: 13,
        songName: "Dheeth",
        poster: "posters/Dheeth.jpg",
        song : "audio/Dheeth - Yo Yo Honey Singh_192(Ghantalele.com).mp3"
    },
    {
        id: 14,
        songName: "Vigdiyan Heeran",
        poster: "posters/Vigdiyan Heeran.jpg",
        song : "audio/Vigdiyan Heeran-(PagalWorld).mp3"
    },

    // Older Albums
    {
        id: 15,
        songName: "Dope Shope",
        poster: "posters/Dope Shope.jpg",
        song: "audio/Dope Shope  Yo Yo Honey Singh Deep Money.mp3"
    },
    {
        id: 16,
        songName: "Hip Hop",
        poster: "posters/Issey Kehte Hain Hip Hop.jpg",
        song : "audio/Issey Kehte Hain Hip Hop (Yo Yo Honey Singh) -320Kbps [PagalWorld.com].mp3"
    },
    {
        id: 17,
        songName: "First Kiss",
        poster: "posters/First kiss.jpg",
        song : "audio/First_Kiss_-_Honey_Singh.mp3"
    },
    {
        id: 18,
        songName: "Desi Kalakar",
        poster: "posters/Desi Kalakar.jpeg",
        song: "audio/Desi Kalakaar_64-(PagalWorld).mp3"
    },
    {
        id: 19,
        songName: "One Bottle Down",
        poster: "posters/One Bottle Down.jpg",
        song : "audio/One Bottle Down - Yo Yo Honey Singh.mp3"
    },
    {
        id: 20,
        songName: "Breakup Party",
        poster: "posters/Breakup Party.jpg",
        song : "audio/Breakup Party (ft Leo) Yo Yo Honey Singh.mp3"
    },
    {
        id: 21,
        songName: "Chaar Botal Vodka",
        poster: "posters/Chaar Botal Vodka.jpg",
        song: "audio/Chaar Botal Vodka Yo Yo Honey Singh 320Kbps.mp3"
    },
    {
        id: 22,
        songName: "Chote Chhote Peg",
        poster: "posters/Chote Chhote Peg.webp",
        song : "audio/Chote Chhote Peg - Yo Yo Honey Singh.mp3"
    }
];

// Background 'song items' image settings

document.addEventListener('DOMContentLoaded', function() 
{
    const songContainers = document.querySelectorAll('.albums .song');   

    songContainers.forEach((container, index) => {
        container.style.backgroundImage = `url('${songs[index].poster}')`;

        const h3 = container.querySelector('h3');
        h3.textContent = songs[index].songName;
    });
});

// Background for disc-player  

document.addEventListener('DOMContentLoaded', function() 
{
    let id;
    const disc = document.getElementById('disc');
    const title = document.getElementById('song-title');
    const playButton = document.getElementById('playButton');
    const songImg = document.querySelector('.songImg');
    const back = document.getElementById('back');
    const forward = document.getElementById('forward');
    // const discOutline = document.querySelector(".disc-outline");
    const volume = document.getElementById('volume');

    Array.from(document.getElementsByClassName('song')).forEach((e) => {
        e.addEventListener('click', (el) => {
            id = el.target.id - 1;
            songdetails.style.display = 'block';
            music.pause();

            disc.style.backgroundImage = `url('${songs[id].poster}')`; // Disc image 
            songImg.style.backgroundImage = `url('${songs[id].poster}')`; // Bg of hidden disc player
            bassImg.style.backgroundImage = `url('${songs[id].poster}')`; // Bg of hidden bass player
            music.src = songs[id].song;
            
            // playButton.innerHTML = '❚❚';
            playButton.classList.remove('bi-play-circle-fill');
            playButton.classList.add('bi-pause-circle-fill');
            music.play();
            aniMateDisc();

            title.innerHTML = songs[id].songName;
        })
    });

    /** Random Song selection **/
    let index = Math.floor(Math.random() * songs.length);
    window.onload = randomPlay;
    function randomPlay() {
        console.log(index);
        music.src = songs[index].song;
        title.innerHTML = songs[index].songName;

        disc.style.backgroundImage = `url('${songs[index].poster}')`; // Disc image 
        songImg.style.backgroundImage = `url('${songs[index].poster}')`; // Bg of hidden disc player
        bassImg.style.backgroundImage = `url('${songs[index].poster}')`; // Bg of hidden bass player
    };

    /** Listeners for Music **/

    playButton.addEventListener('click', () => {
        if (music.paused || music.currentTime <= 0) {
            music.play();
            // console.log('Audio pushed to play');
            // playButton.innerHTML = '❚❚'; // Pause symbol
            playButton.classList.remove('bi-play-circle-fill');
            playButton.classList.add('bi-pause-circle-fill');
            aniMateDisc();
        } else {
            music.pause();
            // playButton.innerHTML = '&#9658;'; // Play symbol
            playButton.classList.remove('bi-pause-circle-fill');
            playButton.classList.add('bi-play-circle-fill');
            /* aniMateDisc(); // Not Needed here */
        }
    });

    back.addEventListener('click', () => {
        id -= 1;
        if (id < 0){
            id = 0;
        }
        songdetails.style.display = 'block';
        // music.pause();

        disc.style.backgroundImage = `url('${songs[id].poster}')`;
        songImg.style.backgroundImage = `url('${songs[id].poster}')`; // Bg of hidden Disc player
        bassImg.style.backgroundImage = `url('${songs[id].poster}')`; // Bg of hidden Bass player
        music.src = songs[id].song;
        title.innerHTML = songs[id].songName;

        // playButton.innerHTML = '❚❚';
        playButton.classList.remove('bi-play-circle-fill');
        playButton.classList.add('bi-pause-circle-fill');
        music.play();
        // aniMateDisc();
    });

    forward.addEventListener('click', () => {
        if(id < songs.length){
            id += 1;
        }  //Make it proper
        
        songdetails.style.display = 'block';
        // music.pause();

        disc.style.backgroundImage = `url('${songs[id].poster}')`;
        songImg.style.backgroundImage = `url('${songs[id].poster}')`; // Bg of hidden Disc player
        bassImg.style.backgroundImage = `url('${songs[id].poster}')`; // Bg of hidden Bass player
        music.src = songs[id].song;
        title.innerHTML = songs[id].songName;

        // playButton.innerHTML = '❚❚';
        playButton.classList.remove('bi-play-circle-fill');
        playButton.classList.add('bi-pause-circle-fill');
        music.play();
        // aniMateDisc();
    });

    document.addEventListener('keydown', function(event)
    {
        if (event.key == ' '){
            event.preventDefault();
            if (music.paused){
                music.play();
                // randomPlay();
                playButton.classList.remove('bi-play-circle-fill');
                playButton.classList.add('bi-pause-circle-fill');
                aniMateDisc();
            }
            else{
                music.pause();
                // playButton.innerHTML = '&#9658;';
                playButton.classList.remove('bi-pause-circle-fill');
                playButton.classList.add('bi-play-circle-fill');
                /* aniMateDisc(); // Not Needed here */
            }
        }
    });

    /* Volume Function */ 
    volume.addEventListener('click', ()=>{
        if(music.volume == 0)
        {
            music.volume = 1;
            volume.classList.remove('bi-volume-mute-fill');
            volume.classList.add('bi-volume-up-fill');
        }
        else
        {
            music.volume = 0;
            volume.classList.add('bi-volume-mute-fill');
            volume.classList.remove('bi-volume-up-fill');
        }
    });

    /** Music Time Line **/

    const startTime = document.getElementById('startTime');
    const endTime = document.getElementById('endTime');

    const seek = document.getElementById('seek');
    const movingCircle = document.getElementById('movingCircle');
    const movingBar = document.getElementById('movingBar');

    music.addEventListener('timeupdate', () => {
        const currTime = music.currentTime;
        const duration = music.duration;

        /* Set Full duration */
        let minEnd = Math.floor(duration / 60);
        let secEnd = Math.floor(duration % 60);

        if(minEnd < 10){
            minEnd = `0${minEnd}`;
        }
        if(secEnd < 10){
            secEnd = `0${secEnd}`;
        }
        endTime.innerText = `${minEnd}:${secEnd}`;

        /* Update duration */
        let minStart = Math.floor(currTime / 60);
        let secStart = Math.floor(currTime % 60);

        if(minStart < 10){
            minStart = `0${minStart}`;
        }
        if(secStart < 10){
            secStart = `0${secStart}`;
        }
        startTime.innerText = `${minStart}:${secStart}`;

        /* Update Time line */
        let progress = parseInt((currTime / duration) * 100);
        seek.value  = progress;

        let seekbar = seek.value;
        // console.log(seekbar);
        movingBar.style.width = `${seekbar}%`;
        movingCircle.style.marginLeft = `${seekbar*0.89}%`;
    });

    /* Update the line when Clicked */
    seek.addEventListener('click', () => {
        music.currentTime = seek.value * music.duration / 100;
        // music.fastSeek = true;
    });
    seek.addEventListener('change', () => {
        music.currentTime = seek.value * music.duration / 100;
    });

    // Implement it

    /*let isPlaying = !music.paused;
    let links = document.querySelectorAll('.nav-content a');

    links.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let destination = this.getAttribute('href');
            navigate(destination);
        })
    });

    function navigate(url){
        let currentTime = music.currentTime;
        window.location.href = url;

        if(window.location.pathname === '/albums.html')
        {
            if (!isPlaying) {
                music.play();
                music.currentTime = currentTime;
            }
        }
    }*/

    /** For local.html **/
    const musicInput = document.getElementById('musicInput');
    // const songtitle = document.getElementById('songTitle');
    
    musicInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        music.src = URL.createObjectURL(file);
        // songtitle.innerHTML = file.name;
        // console.log(file.name);

        music.play();
        aniMateDisc();
        
        playButton.classList.remove('bi-play-circle-fill');
        playButton.classList.add('bi-pause-circle-fill');
    })
});

function aniMateDisc()
{
    /**  Disc rotation and Bass Effect settings **/
    const audio = music;
    const disc = document.getElementById("disc");
    const circles = document.querySelectorAll(".circle");
    const discContainer = document.querySelector(".disc-container");
    const discOutline = document.querySelector(".disc-outline");
    const songImg = document.querySelector(".songImg");

    // Pause the disc animation initially
    disc.style.animationPlayState = "paused";
    // discContainer.style.border = `10px solid rgba(144, 255, 84, 1)`;

    audio.addEventListener("play", () => {
        disc.style.animationPlayState = "running";
        // circles.style.animationPlayState = "running";
        musicBar.style.width = '0';
        circles.forEach((circle) => {
        circle.style.animation = "pulse 1s infinite alternate";
        });
    });

    audio.addEventListener("pause", () => {
        setTimeout(() => {
        disc.style.animationPlayState = "paused";
        // circles.style.animationPlayState = "paused";
        // discContainer.style.border = `10px solid rgba(144, 255, 84, 1)`;
        }, 300);
        circles.forEach((circle) => {
        circle.style.animation = "none"; // Stop pulse animation when paused
        });
        // updateBorderColor();
    });

    // Get audio context
    const audioContext = new AudioContext();
    const audioSrc = audioContext.createMediaElementSource(audio);
    const analyser = audioContext.createAnalyser();

    // Connect audio source to analyser and analyser to output
    audioSrc.connect(analyser);
    analyser.connect(audioContext.destination);

    // Set the number of frequency data we will receive
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // Function to update circle size based on audio beat
    function updateCircleSize() {
        requestAnimationFrame(updateCircleSize);
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
        const scale = 1 + (average / 255) * 0.4; // Normalize and scale size
        const scaleImg = 1 - (average / 255) * 0.5; // Normalize and scale size for background image

        const opacity = Math.min(average / 255 * 2 , 1);

        circles.forEach((circle) => {
        circle.style.transform = `translate(-50%, -50%) scale(${scale})`;   // For circles
        });

        //discContainer.style.border = `10px solid rgba(144, 255, 84, ${opacity})`;  // For 
        if (music.paused){
            discOutline.style.border.opacity = .8;
        }
        else{
            discOutline.style.border = `10px solid rgba(255, 255, 255, ${opacity})`;    // Border 
        }
        songImg.style.transform = `scale(${scaleImg}`;                             // and Background image
    } 

    // For border color
    /*function updateBorderColor()
    {
        requestAnimationFrame(updateBorderColor);
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
        const opacity = Math.min(average / 255 * 2 , 1);
        
        // Color of border
        // discContainer.style.border = `10px solid rgba(255, 255, 255, 1)`;
        const color1 = `rgba(255, 0, 0, ${opacity})`;
        const color2 = `rgba(0, 255, 0, ${opacity})`;
        const color3 = `rgba(0, 0, 255, ${opacity})`;

        const gradient = `10px solid linear-gradient(to right, ${color1}, ${color2}, ${color3})`;
        discContainer.style.border = gradient;
    }*/

    /** Bars around the Disc **/

    const musicBar = document.getElementById('music-bar');
    const bar = document.getElementsByClassName('bar');
    const circleP = document.getElementById("circleP");

    const NUM_BARS = 20; // Increase Number of bars if required
    const bars = [];
    const bars2 = [];
    const bars3 = [];
    const bars4 = [];

    for (let i = 0; i < NUM_BARS; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.transform = `rotate(${(i / NUM_BARS) * 100 + 45 }deg) translateY(-320px)`;
        circleP.appendChild(bar);
        bars.push(bar);
    }

    for (let i = 0; i < NUM_BARS; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.transform = `rotate(${(i / NUM_BARS) * 100 + 225}deg) translateY(-324px)`;
        circleP.appendChild(bar);
        bars2.push(bar);
    }

    for (let i = 0; i < NUM_BARS; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.transform = `rotate(${(-i / NUM_BARS) * 100 + 45}deg) translateY(-322px)`;
        circleP.appendChild(bar);
        bars3.push(bar);
    }

    for (let i = 0; i < NUM_BARS; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.transform = `rotate(${(-i / NUM_BARS) * 100 + 225}deg) translateY(-322px)`;
        circleP.appendChild(bar);
        bars4.push(bar);
    }

    // Do not implement
    /*for (let i = 0; i < NUM_BARS; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.transform = `rotate(${(i / NUM_BARS) * 180 - 270}deg) translateY(400px)`;
        bar.style.backgroundColor = `rgb(255, 0, 0)`;
        circleP.appendChild(bar);
        bars3.push(bar);
    }*/

    const barHeightFactor = 1; // Height Factor fot bars
    const maxBarHeight = 180; // Maximum height the bars can reach
    // const maxInBarHeight = 100; // Maximum height the bars can reach
    const minHeight = 12;

    function renderFrame() {
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(dataArray);
    
        bars.forEach((bar, i) => {
          const barHeight = dataArray[i * Math.floor(bufferLength / NUM_BARS)] * barHeightFactor;
          const adjustedHeight = barHeight > 0 ? (barHeight / 255) * maxBarHeight : minHeight; 
          bar.style.height = `${adjustedHeight}px`; // Main Line
        //   let color = colorChange(adjustedHeight);
        //   console.log(color);
        //   bar.style.backgroundColor = color;
        });
    
        bars2.forEach((bar, i) => {
          const barHeight = dataArray[i * Math.floor(bufferLength / NUM_BARS)] * barHeightFactor;
          const adjustedHeight = barHeight > 0 ? (barHeight / 255) * maxBarHeight : minHeight; 
          bar.style.height = `${adjustedHeight}px`; // Main Line
        });
    
        bars3.forEach((bar, i) => {
          const barHeight = dataArray[i * Math.floor(bufferLength / NUM_BARS)] * barHeightFactor;
          const adjustedHeight = barHeight > 0 ? (barHeight / 255) * maxBarHeight : minHeight; 
          bar.style.height = `${adjustedHeight}px`; // Main Line
        });

        bars4.forEach((bar, i) => {
          const barHeight = dataArray[i * Math.floor(bufferLength / NUM_BARS)] * barHeightFactor;
          const adjustedHeight = barHeight > 0 ? (barHeight / 255) * maxBarHeight : minHeight; 
          bar.style.height = `${adjustedHeight}px`; // Main Line
        });

        // console.log(dataArray[Math.floor(bufferLength / NUM_BARS)]);
        // const barRangeColor = dataArray[Math.floor(bufferLength / NUM_BARS)];
        /*function colorChange(barHeight)
        {
            let color;
            if (barHeight < 20 && barHeight >= 0) {
                color = "red";
            }
            else if (barHeight > 20 && barHeight < 40) {
                color = "#fff";
            } else if (barHeight > 40){
                color = "#000";
            } else {
                color = "#a63cda";
            }
            return color;
        }*/
    }

    // Side bars
    var leftBar = document.getElementById('left-bar');
    var rightBar = document.getElementById('right-bar');
    
    function renderSideBar() {
        requestAnimationFrame(renderSideBar);

        analyser.getByteFrequencyData(dataArray);

        var leftHeight = 0;
        var rightHeight = 0;

        // Calculate the average amplitude of left and right halves
        for (var i = 0; i < bufferLength / 2; i++) {
            leftHeight += dataArray[i];
        }
        for (var i = 0; i < bufferLength / 2; i++) {
            rightHeight += dataArray[i];
        }
        leftHeight /= (bufferLength / 2);
        rightHeight /= (bufferLength / 2);

        leftBar.style.height = leftHeight*4 + 'px';
        rightBar.style.height = rightHeight*4 + 'px';

        // Adjust bar height based on amplitude
        if (leftHeight*4 > 600)
        {
            leftBar.style.backgroundColor = "#a63cda";
            rightBar.style.backgroundColor = "#a63cda";
        }
        else
        {
            leftBar.style.backgroundColor = "";
            rightBar.style.backgroundColor = "";
        }
        // console.log(leftBar.style.height);
    }

    /** Bass Bars (in Bass Player) **/
    const bassImg = document.getElementById('bassImg');
    const rectangle = document.getElementById('rectangle');
    const NUM_BASS_BARS = 40; 
    const bassBars = [];
    const bassBars2 = [];

    for (let i = 0; i < NUM_BASS_BARS; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bassBar1');
        bar.style.left = `${(i / NUM_BARS) * 50}%`; 
        rectangle.appendChild(bar);
        bassBars.push(bar);
    }

    for (let i = 0; i < NUM_BASS_BARS; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bassBar2');
        bar.style.right = `${(i / NUM_BARS) * 50}%`; 
        rectangle.appendChild(bar);
        bassBars2.push(bar);
    }

    function renderBassFrame() {
        requestAnimationFrame(renderBassFrame);
        analyser.getByteFrequencyData(dataArray);

        const average = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
        const scaleImg = 1 + (average / 255) * 0.2; 
        const opacity = Math.min(average / 255 * 2 , 1);
    
        var maxBarHeight = 160;
        bassBars.forEach((bar, i) => {
          const barHeight = dataArray[i * Math.floor(bufferLength / NUM_BARS)] * barHeightFactor;
          const adjustedHeight = barHeight > 0 ? (barHeight / 255) * maxBarHeight : 10; 
          bar.style.height = `${adjustedHeight}px`;
        });
        bassBars2.forEach((bar, i) => {
          const barHeight = dataArray[i * Math.floor(bufferLength / NUM_BARS)] * barHeightFactor;
          const adjustedHeight = barHeight > 0 ? (barHeight / 255) * maxBarHeight : 10; 
          bar.style.height = `${adjustedHeight}px`;
        });

        bassImg.style.transform = `translate(-50%, -50%) scale(${scaleImg})`;
        // bassImg.style.rotateX = `${-opacity*5}deg`; 
        // bassImg.style.border.opacity = `${opacity}`;
        rectangle.style.transform = `translate(-50%, -50%) scale(${scaleImg})`;
    }

    // Animate Side Bars
    renderSideBar();

    // Animate Bars around the Disc
    renderFrame();

    // Animate Bass Bars
    renderBassFrame();

    // Start updating circle size
    updateCircleSize();
}