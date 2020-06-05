
    // Aplicando código para evento de rotação das imagens do banner

    // variáveis do projeto 
    let time = 2000,
        currentIndexImage = 0,
        images = document.querySelectorAll('.container img'),
        maxImage = images.length;
        

    // Código para rotacionar imagens
    function rotateBanner() {
        images[currentIndexImage].classList.remove('selected');
        currentIndexImage++;

        if(currentIndexImage >= maxImage) 
        currentIndexImage = 0;
    
        images[currentIndexImage].classList.add('selected');
        
    }

    // Definindo função para rodar código de rotação, em um intervalo de tempo
    function startRotate() {
        setInterval(() => {
            rotateBanner();
        }, time);
    }

    // Rodar código ao dar load na pagina
    window.addEventListener('load', startRotate);