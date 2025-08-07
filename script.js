const ativos = document.querySelectorAll('.Barbearia');
const indicadores = document.querySelectorAll('.indicador')
const menuAberto = document.querySelector('.menu-aberto');
let index = 0;


function trocarImagem(){
    ativos.forEach((ativo) =>{        
            ativo.classList.remove('ativa');
         });
            ativos[index].classList.add('ativa');
            index++

            index = index > ativos.length - 1 ? 0 : index++;
        }



function controladorDeImagens(){
    indicadores.forEach((ativo) =>{        
            ativo.classList.remove('ativado');
         });
            indicadores[index].classList.add('ativado');

            index = index > indicadores.length - 1 ? 0 : index++;
        }


setInterval(controladorDeImagens, 5000);
setInterval(trocarImagem, 5000);


document.querySelector('.abrir-menu').addEventListener('click', ()=> {
    if(menuAberto.classList.contains('open')){
        menuAberto.classList.remove('open');
    }else{
        menuAberto.classList.add('open');
    }
})