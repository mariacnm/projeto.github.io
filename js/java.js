document.addEventListener('DOMContentLoaded', function() {
    //lista to-odo
    pai_doto= document.querySelector('.lista_todo');
    //adicione=document.querySelector('.input_adicione')
    div=document.querySelectorAll('.row');
    text_usuario= document.querySelector('input[type="text"]');
    
    botao_enviar=document.querySelector('input[type="submit"]');
   
    count = 0;
    porcent = 0;

    botao_enviar.addEventListener('click', function(event) {
        event.preventDefault();

        novo_botao = document.createElement('button');
        novo_botao.className = 'botao_progresso'
        novo_botao.style.backgroundColor='#FFEFA1';
        novo_botao.style.padding='10px';
        novo_botao.style.height='7px';
        novo_li = document.createElement('li');
        
        novo_h2 = document.createElement('h2')
        novo_h2.className = 'h2_progresso'
        novo_h2.innerHTML = text_usuario.value

        novo_li.appendChild(novo_botao);
        novo_botao.appendChild(novo_h2);
        pai_doto.appendChild(novo_li);

        count = pai_doto.children.length
        console.log(pai_doto.children.length)
        h2_criado = document.querySelectorAll('.h2_progresso')
        
        
    })
    for(i of pai_doto.children.length){
        novo_botao[i].addEventListener('click', function(event){
            h2_criado[i].style.color="green";
        })
    }
    
    h1_musica = document.querySelector('.h1_musica')
    musica=document.querySelector('.Musica')
    h1_musica.addEventListener('click', function(event) {
        musica.style.display="block";
        event.stopPropagation();
    })

// usuario
usuario=document.querySelectorAll('.titulo_usuario')
console.log(usuario)
usuario.addEventListener('click', function(event) {
    window.location.href = "chat.html";
})

})