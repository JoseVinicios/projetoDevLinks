function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

//pegar tag img
    const img = document.querySelector("#profile img")
//substituir a imagem
    if(html.classList.contains('light')) {
//se tiver light mode, add imagem light
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    } 



//se tiver sem light mode, manter imagem normal


}