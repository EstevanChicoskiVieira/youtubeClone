const input = document.getElementById("menu-h")
const compact = document.querySelector(".menu-compacto")
const descompact = document.querySelector(".menu-descompacto")

input.addEventListener('click', () => {
    if(input .checked){
        compact.style.display = 'none'
        descompact.style.display = 'block'
    } else {
        compact.style.display = 'block'
        descompact.style.display = 'none'
    }
});