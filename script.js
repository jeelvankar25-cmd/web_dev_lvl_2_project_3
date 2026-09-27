let songs = [
  {
    name: "Moth To A Flame - The Weeknd",
    image: "./images/moth_to_a_flame.jpg",
    src: "/songs/Swedish\ House\ Mafia\ and\ The\ Weeknd\ -\ Moth\ To\ A\ Flame\ \(Official\ Video\)\ -\ TheWeekndVEVO.mp3",
    duration: "4:14",
  },
  {
    name: "The Abyss Ft.Lana Del rey",
    image: "./images/the_abyss.jpg",
    src: "./songs/The-Weeknd-The-Abyss-\(HipHopKit.com\).mp3",
    duration: "4:11",
  },
  {
    name: "Sao Paulo Ft.Anitta",
    image: "./images/sao_paulo.jpg",
    src: "./songs/Sao_Paulo.mp3",
    duration: "5:00",
  },
  {
    name: "Is There Someone Else ?",
    image: "./images/is_there_someone_else.jpg",
    src: "./songs/The_Weeknd_-_Is_there_someone_else_2023_\(mp3.pm\).mp3",
    duration: "3:20",
  },
  {
    name: "Timeless - The Weeknd",
    image: "./images/timeless.jpg",
    src: "./songs/The\ Weeknd\,\ Playboi\ Carti\ -\ Timeless\ -\ TheWeekndVEVO.mp3",
    duration: "4:16",
  },
];

let audio = new Audio(
  "./songs/The_Weeknd_-_Is_there_someone_else_2023_\(mp3.pm\).mp3",
);
let songImage = document.querySelector("#left");
let selectedSong = 0;
let check = 0;

function DynamicSongsData() {
  let data = "";
  let all_songs = document.querySelector("#all-songs");
  songs.forEach(function (song, i) {
    data += `<div class="song-card" id="${i}">
                <div class="part1">
                    <img src="${song.image}" alt="">
                    <h2>${song.name}</h2>
                </div>
                <h6>${song.duration}</h6>
             </div>`;
  });
  all_songs.innerHTML = data;
  audio.src = songs[selectedSong].src;
  songImage.style.backgroundImage = `url(${songs[selectedSong].image})`;
}
DynamicSongsData();

document.querySelector("#all-songs").addEventListener("click", function (e) {
  selectedSong = e.target.id;
  DynamicSongsData();
  play.innerHTML = "<i class='ri-pause-line'></i>";
  audio.play();
  check = 1;
});

let play = document.querySelector("#play");
let forward = document.querySelector("#forward");
let backward = document.querySelector("#backward");

play.addEventListener("click", function () {
  if (check == 0) {
    play.innerHTML = "<i class='ri-pause-line'></i>";
    check = 1;
    DynamicSongsData();
    audio.play();
  } else {
    play.innerHTML = "<i class='ri-play-fill'></i>";
    check = 0;
    DynamicSongsData();
    audio.pause();
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < songs.length - 1) {
    selectedSong++;
    DynamicSongsData();
    audio.play();
  } else{
    forward.style.opacity = .4;
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    DynamicSongsData();
    audio.play();
  } else{
    backward.style.opacity = .4;
  }
});
