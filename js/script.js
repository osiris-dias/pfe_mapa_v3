// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Menu de navegação responsivo
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Validação do formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            let isValid = true;

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Validação do nome
            if (name.value.trim() === '') {
                alert('Por favor, insira seu nome.');
                isValid = false;
            }

            // Validação do email
            if (email.value.trim() === '') {
                alert('Por favor, insira seu e-mail.');
                isValid = false;
            } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email.value)) {
                alert('Por favor, insira um e-mail válido.');
                isValid = false;
            }

            // Validação da mensagem
            if (message.value.trim() === '') {
                alert('Por favor, insira sua mensagem.');
                isValid = false;
            }

            if (isValid) {
                alert('Formulário enviado com sucesso!');
                contactForm.reset(); // Limpa o formulário
            }
        });
    }

    // Efeito de fade-in ao rolar a página
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Contador de caracteres para o textarea (exemplo de efeito interativo)
    const messageTextarea = document.getElementById('message');
    const charCount = document.createElement('p');
    if (messageTextarea) {
        charCount.style.fontSize = '0.8em';
        charCount.style.color = '#666';
        messageTextarea.parentNode.insertBefore(charCount, messageTextarea.nextSibling);

        messageTextarea.addEventListener('input', function() {
            const currentLength = messageTextarea.value.length;
            charCount.textContent = `Caracteres: ${currentLength}`;
        });
        messageTextarea.dispatchEvent(new Event('input')); // Inicializa o contador
    }

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Efeito Parallax (exemplo mais avançado de JS)
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            let scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
        });
    }
});


