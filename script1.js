document.addEventListener('DOMContentLoaded', () => {

    // 1. Integración Dinámica de WhatsApp (+591 65200690)
    const phoneNumber = '59165200690';
    const whatsappButtons = document.querySelectorAll('.btn-ws');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const courseName = button.getAttribute('data-course') || 'Información General';
            const message = encodeURIComponent(`Hola IIM Academy, estoy interesado en inscribirme o recibir más detalles sobre: *${courseName}*.`);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    // 2. Control de Tarjetas Interactivas 3D (Efecto Flip / Giro)
    const flipButtons = document.querySelectorAll('.btn-ver-precios');
    const backButtons = document.querySelectorAll('.btn-volver');

    flipButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.course-card');
            if (card) {
                card.classList.add('flipped');
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.course-card');
            if (card) {
                card.classList.remove('flipped');
            }
        });
    });

    // 3. Menú Desplegable / Hamburguesa para Mobile
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 4. Animación Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Disparo inicial para elementos arriba del viewport

    // 5. Carrusel de Testimonios
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    let currentTestimonialIndex = 0;

    const showTestimonial = (index) => {
        testimonials.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) {
                card.classList.add('active');
            }
        });
    };

    if (prevBtn && nextBtn && testimonials.length > 0) {
        nextBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            showTestimonial(currentTestimonialIndex);
        });

        prevBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonialIndex);
        });

        // Rotación automática cada 6 segundos
        setInterval(() => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            showTestimonial(currentTestimonialIndex);
        }, 6000);
    }

    // 6. Acordeón para Preguntas Frecuentes (FAQ)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los demás items (opcional para mantener acordeón limpio)
            faqItems.forEach(faq => faq.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

});