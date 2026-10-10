 // Funções de acessibilidade
let tamanhoFonte = 100;
let tamanhoMain = 800;
let main = document.querySelector("main")

function aumentarFonte() {
        if(tamanhoFonte < 200 ){
                tamanhoFonte += 10;
                document.body.style.fontSize = tamanhoFonte + "%";
                tamanhoMain += 50;
                main.style.maxWidth = tamanhoMain + "px";
        }
}

function diminuirFonte() {
        if(tamanhoFonte > 50){
                tamanhoFonte -= 10;
                document.body.style.fontSize = tamanhoFonte + "%";
                if(tamanhoMain > 800){
                    tamanhoMain -= 50;
                    main.style.maxWidth = tamanhoMain + "px";
                }
        }
}

function alternarContraste() {
    document.body.classList.toggle('alto-contraste');
}