document.addEventListener("DOMContentLoaded", function(){

    const botao = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-menu");
    const icon = botao.querySelector("i");

    let aberto = false;

    function fadeIn(element, duration = 300){
        element.style.display = "flex";
        element.style.opacity = 0;

        let start = null;

        function animate(timestamp){
            if(!start) start = timestamp;

            let progress = timestamp - start;
            let opacity = progress / duration;

            element.style.opacity = Math.min(opacity, 1);

            if(progress < duration){
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    function fadeOut(element, duration = 300){

        let start = null;

        function animate(timestamp){
            if(!start) start = timestamp;

            let progress = timestamp - start;
            let opacity = 1 - (progress / duration);

            element.style.opacity = Math.max(opacity, 0);

            if(progress < duration){
                requestAnimationFrame(animate);
            } else {
                element.style.display = "none";
            }
        }

        requestAnimationFrame(animate);
    }

    botao.addEventListener("click", function(){

        if(!aberto){
            fadeIn(menu);
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
            aberto = true;
        }else{
            fadeOut(menu);
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
            aberto = false;
        }

    });

    // 🔥 CORREÇÃO DO BUG AO VOLTAR PRO DESKTOP
    window.addEventListener("resize", function(){

        if(window.innerWidth > 768){
            menu.style.display = "";
            menu.style.opacity = "";
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
            aberto = false;
        }

    });

});