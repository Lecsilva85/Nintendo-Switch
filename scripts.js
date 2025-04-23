let body = document.querySelector("body")
let game = document.querySelector(".console-neon")

function mudarVisual(cor, console) {
    game.classList.add("troca-efeito")
    game.classList.add("rotacionando")
    body.style.backgroundColor = cor


    setTimeout(() => {
        game.src = console
        game.classList.remove("troca-efeito")
        game.classList.remove("rotacionando")
    }, 700)
}