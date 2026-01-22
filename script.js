// Déf de la variable root de façon globale et inchangable qui est nécessaire pour utiliser les variables CSS en JavaScript
const setCSSvar = (var_name, var_new_value) => {document.documentElement.style.setProperty(var_name, var_new_value)}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function bpm() {
    let bpm_audio = new Audio("Sons/bpm_audio.m4a")
    if (running) {
        interval_bpm =setInterval(() => {
            bpm_audio.play()
        },60/bpm_nb*1000)
    }
    else {clearInterval(interval_bpm)}

    if (running) {
    interval_accord =setInterval(() => {
                document.getElementById("text_accord").textContent = game_mineur[getRandomInt(6)]
            },60/bpm_nb*1000*8)
    }
    else {clearInterval(interval_accord)}
    
    
}

function game() {
    if (running) {
        note_bank = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#']

        interval_accord_mineur_gamemineur=[0,1,3,4]
        interval_accord_majeur_gamemajeur=[1,2,5,6]

        fondamentale=index_note()

        
        mineur=[0,2,3,5,7,8,10]
        game_mineur = mineur.map(i => note_bank[i + fondamentale])
        console.log("note mineur : ",game_mineur)
        for (interval of interval_accord_mineur_gamemineur) {
            game_mineur[interval] = game_mineur[interval]+"m"
        }
        

        majeur=[0,2,4,5,7,9,10]
        game_majeur = majeur.map(j => note_bank[j + fondamentale])
        console.log("note majeur : ",game_majeur)
        for (interval of interval_accord_majeur_gamemajeur) {
            game_majeur[interval] = game_majeur[interval]+"m"
        }
            
        console.log("accord mineur : ",game_mineur)
        console.log("accord majeur : ",game_majeur)
    }

}
function index_note() {
    index=0

    for (note of note_bank) {
        if (note==game_input) {
            return index
        }
        else {
            index =index + 1
        }
    }
}

function start(){
    if ((document.getElementById("start_button").textContent)=="Start") {
        running = true
        game_input = document.getElementById("game").value
        bpm_nb = document.getElementById("bpm").value

        document.getElementById("start_button").textContent = "Stop"
    }
    else {
        running = false
        document.getElementById("start_button").textContent = "Start"
    }
    game()
    bpm()
}




