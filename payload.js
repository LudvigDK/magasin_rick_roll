var rrv = document.createElement("video");

rrv.type = "video/mp4"
rrv.src = "https://github.com/LudvigDK/magasin_rick_roll/blob/main/rick_vid.mp4?raw=true"

vid.loop = true
rrv.allowfulscreen = true

document.body.appendChild(rrv)

rrv.requestFullscreen()
rrv.play()
