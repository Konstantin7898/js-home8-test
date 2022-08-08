import Player from "@vimeo/player";
const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

player.on("play", async () => {
  if (localStorage.getItem("currentVideoTime")) {
    await player.setCurrentTime(+localStorage.getItem("currentVideoTime"));
    localStorage.removeItem("currentVideoTime");
  }
});

window.addEventListener("beforeunload", async () => {
  try {
    const curTime = await player.getCurrentTime();
    localStorage.setItem("currentVideoTime", curTime);
  } catch (err) {
    console.log(err);
  }
});
