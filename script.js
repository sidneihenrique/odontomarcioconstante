// ========================
// MOBILE MENU
// ========================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const menuIcon = menuToggle.querySelector('ion-icon');

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuIcon.setAttribute('name', isOpen ? 'close' : 'menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.setAttribute('name', 'menu');
        document.body.style.overflow = '';
    });
});

// ========================
// HEADER AO ROLAR
// ========================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, { passive: true });

// ========================
// SWIPER — GALERIA
// ========================
const gallerySwiper = new Swiper('.gallery-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
        el: '.gallery-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery-swiper .swiper-button-next',
        prevEl: '.gallery-swiper .swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
});

Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
        display: {
            left: ['infobar'],
            middle: [],
            right: ['close'],
        },
    },
});

// ========================
// SWIPER — DEPOIMENTOS
// ========================
const testimonialSwiper = new Swiper('.testimonials-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.testimonials-swiper .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
});

// ========================
// FAQ ACCORDION
// ========================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Fecha todos
        faqItems.forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq-answer').classList.remove('open');
        });

        // Abre o clicado se estava fechado
        if (!isActive) {
            item.classList.add('active');
            answer.classList.add('open');
        }
    });
});

// ========================
// ANIMAÇÃO DE ENTRADA (Intersection Observer)
// ========================
const animatedElements = document.querySelectorAll(
    '.service-card, .differential-item, .testimonial-card, .faq-item, .credential-item'
);

const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
