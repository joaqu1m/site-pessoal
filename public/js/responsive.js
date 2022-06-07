let abaAberta = 0
let width = 0
let height = 0

const classeHeader = document.querySelector('.header');
const classeBloco = document.querySelector('.bloco');
const classeFaixa = document.querySelector('.faixa');
const classeSelecionada = document.querySelector('.selecionada');
const classeNormal = document.querySelectorAll('.normal');
const classeHeaderRepo = document.querySelector('.headerRepo');

calcularDimensoes();

function calcularDimensoes() {
    width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;

    console.log(width, height);
    redimensionarHeader();
}

function redimensionarHeader() {
    if (width < 1000) {
        imgSpec.style.display = 'none'
    }
    if (width >= 1000) {
        imgSpec.style.display = 'block'
    }
    if (width < 700) {
        for (var i = 0; i < classeNormal.length; i++) {
            classeNormal[i].style.display = 'none'
        }
        classeSelecionada.style.display = 'none'
        classeFaixa.style.display = 'none'
        classeHeader.style.backgroundColor = 'rgb(141, 26, 141)'
        classeHeader.style.height = '40px'
        classeHeaderRepo.style.height = '40px'
        quadrado.style.display = 'block'
        textoMeio.style.display = 'flex'
    }
    if (width >= 700) {
        for (var i = 0; i < classeNormal.length; i++) {
            classeNormal[i].style.display = 'flex'
        }
        classeSelecionada.style.display = 'flex'
        classeFaixa.style.display = 'block'
        classeHeader.style.backgroundColor = 'rgb(82, 12, 82)'
        classeHeader.style.height = '80px'
        classeHeaderRepo.style.height = '80px'
        quadrado.style.display = 'none'
        textoMeio.style.display = 'none'
    }
}

window.addEventListener("resize", calcularDimensoes);

function abaDireita() {
    if (abaAberta == 0) {
        classeBloco.style.filter = 'brightness(50%)'
        abaSelecao.style.display = 'block'
        abaAberta = 1
    } else if (abaAberta == 1) {
        classeBloco.style.filter = 'brightness(100%)'
        abaSelecao.style.display = 'none'
        abaAberta = 0
    }
}
function abaDireitaFechar() {
        if (abaAberta == 1) {
        classeBloco.style.filter = 'brightness(100%)'
        abaSelecao.style.display = 'none'
        abaAberta = 0
    }
}