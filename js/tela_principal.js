document.addEventListener('DOMContentLoaded', function() {
    //recomendacoes
    clica_filme = document.querySelector('.abrir1');
    clica_musica = document.querySelector('.abrir2');
    clica_livro = document.querySelector('.abrir3');
    clica_serie = document.querySelector('.abrir4');
    es2 = document.querySelector('.menu_recomen1');
    es3 = document.querySelector('.menu_recomen2');
    es4 = document.querySelector('.menu_recomen3');
    es5 = document.querySelector('.menu_recomen4');

    clica_filme.addEventListener('click', function(event) {
        es2.style.display = 'block';
        event.stopPropagation();
    })
    clica_musica.addEventListener('click', function(event) {
        es3.style.display = 'block';
        event.stopPropagation();
    })
    clica_livro.addEventListener('click', function(event) {
        es4.style.display = 'block';
        event.stopPropagation();
    })
    clica_serie.addEventListener('click', function(event) {
        es5.style.display = 'block';
        event.stopPropagation();
    })

    clica_1 = document.querySelector('.menu_recomen1')
    clica_1.addEventListener('click', function(event) {
        es2.style.display= "none";
    })
    clica_2 = document.querySelector('.menu_recomen2')
    clica_2.addEventListener('click', function(event) {
        es3.style.display= "none";
    })
    clica_3 = document.querySelector('.menu_recomen3')
    clica_3.addEventListener('click', function(event) {
        es4.style.display= "none";
    })
    clica_4 = document.querySelector('.menu_recomen4')
    clica_4.addEventListener('click', function(event) {
        es5.style.display= "none";
    })
    
    // RECO FILME
    botao_recomen = document.querySelectorAll('.button_recomen')
    botao_recomen[0].addEventListener('click', function(event){
        botao_recomen.style.background='#7A92C2';
    })
    botao_recomen[1].addEventListener('click', function(event){
        botao_recomen.style.background='#7A92C2';
    })
    botao_recomen[2].addEventListener('click', function(event){
        botao_recomen.style.background='#7A92C2';
    })
    botao_recomen[3].addEventListener('click', function(event){
        botao_recomen.style.background='#7A92C2';
    })
})