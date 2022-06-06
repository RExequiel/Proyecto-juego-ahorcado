let palabraOculta = document.querySelector('#palabraOculta');

const desistir = ()=>{
    window.location.reload();
}

const palabraRegex=/^[A-Z]{3,16}$/;

const adivinar= document.querySelector('#jugar');
adivinar.addEventListener('click',(e)=>{
    e.preventDefault();

    const palabra = document.querySelector('#palabra').value

    if(palabraRegex.test(palabra)){
        palabraOculta.textContent = '_ '.repeat(palabra.length);
    }else{
        alert('CAMPO INCORRECTO, Ingrese solo letras MAYÚSCULAS');
        window.location.reload();
    };

    document.addEventListener('keydown',(e)=>{
        
        let pasando= palabraOculta.textContent.split(' ');

        for(i=0;i<palabra.length;i++){
            if(palabra[i]===e.key){   
                pasando[i]= e.key;
            };
        };

        palabraOculta.textContent = pasando.join(' ');

    });
    
    const intentos = document.querySelector('#intentos');
    const imagen = document.querySelector('#imagenes');
    const fallo= document.querySelector('#fallos');
    let contador = 0;

    document.addEventListener('keydown',(e)=>{
        if(palabra.indexOf(e.key)<0){
            imagen.innerHTML=`<img src="img/${contador++}.png" alt="imagen ahorcado" class="ahorcado-img">`;
            fallo.textContent=e.key;
        };
        return intentos.textContent = contador;
        
    });

    
    const ganaste = document.querySelector('#gano')
    const perdiste = document.querySelector('#perdio');

    document.addEventListener('keydown',(e)=>{

        let palabraArr = palabraOculta.textContent.split(' ');
        let palabraEvaluar = palabraArr.join('');

        if(palabraEvaluar===palabra){
            ganaste.innerHTML = `Felicidades Ganaste!!! 
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#00F" class="bi bi-emoji-smile-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                </svg>`
            ;
            setInterval(() => {
                window.location.reload();
            }, 5000);  
        };

        if(intentos.textContent>9){
            perdiste.innerHTML = `Lo siento, perdiste 
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="#F00" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                </svg>
                La palabra es: ${palabra}`
            ;
            setInterval(() => {
                window.location.reload();
            }, 2000);  
        };
    });
});






