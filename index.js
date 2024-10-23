let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let button = document.getElementById("fightButton")

function attack (){
   
  emoji1 = Math.floor(Math.random()*fighters.length)
  emoji2 = Math.floor(Math.random()*fighters.length)

  stageEl.textContent = fighters[emoji1] + " Vs " + fighters[emoji2]
  console.log (stageEl.textContent)
}

attack()