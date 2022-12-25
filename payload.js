var rrv = document.createElement("video");

rrv.type = "video/mp4"
rrv.src = "https://raw.github.com/LudvigDK/magasin_rick_roll/main/rick_vid.mp4"

vid.loop = true
rrv.allowfulscreen = true

document.body.appendChild(rrv)

rrv.requestFullscreen()
rrv.play()
