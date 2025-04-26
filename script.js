const navbar = document.querySelector('.navbar');
const floatingLogo = document.querySelector('.floating-logo');
const scrollThreshold = 50;

const dropdownContainers = document.querySelectorAll('.dropdown-container');
const gridDropdownContainer = document.querySelector('.dropdown-container:not(.language-dropdown)');
const languageDropdownContainer = document.querySelector('.language-dropdown');
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

const translations = {
    'en': {
        'nav-home': 'Home Page',
        'nav-mining': 'Mining Exploration',
        'nav-language': 'Language',
        'hero-title': "Let's go to the future together",
        'hero-paragraph': "Active investors, future-focused institutions and trusted asset stewards. We believe that we can bring economic prosperity in a sustainable manner while protecting the living environment of future generations. We are committed to our vision of a \"Active Economy, Beautiful Society and Clean Planet\" (abc world) which is part of the 2030 Sustainable Development Goals set by the United Nations.",
        'hero-button': "Participate in Mining Exploration",
        'stat1-label': 'Order completed',
        'stat1-subtitle': 'Safe and High Yield',
        'stat2-label': 'Clients served',
        'stat2-subtitle': 'Professional customer service team',
        'stat3-label': 'Profit created',
        'stat3-subtitle': 'Cash out your assets anytime',
        'service-subtitle': 'Our service',
        'service-title': 'Go to the future together',
        'service-card-start': 'Start mining',
        'service-card-mining': 'Cryptocurrency mining',
        'service-card-stock-start': 'Stock investment',
        'service-card-stock-title': 'Stocks and Futures',
        'service-card-online-start': 'Online Shopping',
        'service-card-online-title': 'Pay with cryptocurrency'
    },
    'it': {
        'nav-home': 'Pagina iniziale',
        'nav-mining': 'Esplorazione mineraria',
        'nav-language': 'Lingua',
        'hero-title': "Andiamo insieme verso il futuro",
        'hero-paragraph': "Investitori attivi, istituzioni orientate al futuro e gestori patrimoniali di fiducia. Crediamo di poter portare prosperità economica in modo sostenibile, proteggendo l'ambiente di vita delle generazioni future. Ci impegniamo per la nostra visione di una \"Economia Attiva, Società Bella e Pianeta Pulito\" (mondo abc) che fa parte degli Obiettivi di Sviluppo Sostenibile 2030 stabiliti dalle Nazioni Unite.",
        'hero-button': "Partecipa all'Esplorazione Mineraria",
        'stat1-label': 'Ordini completati',
        'stat1-subtitle': 'Sicuro e ad alto rendimento',
        'stat2-label': 'Clienti serviti',
        'stat2-subtitle': 'Team di assistenza clienti professionale',
        'stat3-label': 'Profitto creato',
        'stat3-subtitle': 'Ritira i tuoi beni in qualsiasi momento',
        'service-subtitle': 'Il nostro servizio',
        'service-title': 'Andiamo insieme verso il futuro',
        'service-card-start': 'Inizia a minare',
        'service-card-mining': 'Mining di criptovalute',
        'service-card-stock-start': 'Investimento azionario',
        'service-card-stock-title': 'Azioni e Futures',
        'service-card-online-start': 'Acquisti online',
        'service-card-online-title': 'Paga con criptovaluta'
    },
    'fr': {
        'nav-home': 'Page d\'accueil',
        'nav-mining': 'Exploration minière',
        'nav-language': 'Langue',
        'hero-title': "Allons vers le futur ensemble",
        'hero-paragraph': "Investisseurs actifs, institutions tournées vers l'avenir et gestionnaires d'actifs de confiance. Nous pensons que nous pouvons apporter la prospérité économique de manière durable tout en protégeant l'environnement de vie des générations futures. Nous sommes engagés envers notre vision d'une « Économie Active, une Belle Société et une Planète Propre » (monde abc), qui fait partie des Objectifs de Développement Durable 2030 fixés par les Nations Unies.",
        'hero-button': "Participer à l'exploration minière",
        'stat1-label': 'Commandes complétées',
        'stat1-subtitle': 'Sécurité et haut rendement',
        'stat2-label': 'Clients servis',
        'stat2-subtitle': 'Équipe de service client professionnelle',
        'stat3-label': 'Profit créé',
        'stat3-subtitle': 'Retirez vos actifs à tout moment',
        'service-subtitle': 'Notre service',
        'service-title': 'Allons vers le futur ensemble',
        'service-card-start': 'Commencer à miner',
        'service-card-mining': 'Minage de cryptomonnaies',
        'service-card-stock-start': 'Investissement boursier',
        'service-card-stock-title': 'Actions et Futures',
        'service-card-online-start': 'Achats en ligne',
        'service-card-online-title': 'Payer avec des cryptomonnaies'
    },
    'es': {
        'nav-home': 'Página de inicio',
        'nav-mining': 'Exploración minera',
        'nav-language': 'Idioma',
        'hero-title': "Vayamos juntos al futuro",
        'hero-paragraph': "Inversores activos, instituciones con visión de futuro y custodios de activos de confianza. Creemos que podemos lograr prosperidad económica de manera sostenible, protegiendo el entorno de vida de las generaciones futuras. Estamos comprometidos con nuestra visión de una \"Economía Activa, una Sociedad Bella y un Planeta Limpio\" (mundo abc), que forma parte de los Objetivos de Desarrollo Sostenible 2030 establecidos por las Naciones Unidas.",
        'hero-button': "Participar en la Exploración Minera",
        'stat1-label': 'Pedidos completados',
        'stat1-subtitle': 'Seguro y de alto rendimiento',
        'stat2-label': 'Clientes atendidos',
        'stat2-subtitle': 'Equipo de atención al cliente profesional',
        'stat3-label': 'Beneficio creado',
        'stat3-subtitle': 'Retira tus activos en cualquier momento',
        'service-subtitle': 'Nuestro servicio',
        'service-title': 'Vayamos juntos al futuro',
        'service-card-start': 'Empezar a minar',
        'service-card-mining': 'Minería de criptomonedas',
        'service-card-stock-start': 'Inversión en acciones',
        'service-card-stock-title': 'Acciones y Futuros',
        'service-card-online-start': 'Compras en línea',
        'service-card-online-title': 'Pagar con criptomoneda'
    }
};

function setLanguage(langCode) {
    localStorage.setItem('selectedLanguage', langCode);

    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[langCode] && translations[langCode][key]) {
            element.innerText = translations[langCode][key];
        }
    });

    document.documentElement.lang = langCode;
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-container').forEach(container => {
        container.classList.remove('active');
    });
}

dropdownContainers.forEach(container => {
    container.addEventListener('click', (event) => {
        event.stopPropagation();
        const isActive = container.classList.contains('active');
        closeAllDropdowns();
        if (!isActive) {
            container.classList.add('active');
        }
    });
});

document.addEventListener('click', (event) => {
    let isClickInsideDropdown = false;
    document.querySelectorAll('.dropdown-container').forEach(container => {
        if (container.contains(event.target)) {
            isClickInsideDropdown = true;
        }
    });

    if (!isClickInsideDropdown) {
        closeAllDropdowns();
    }
});

document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const selectedLang = option.getAttribute('data-lang');
        setLanguage(selectedLang);
        closeAllDropdowns();
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
        floatingLogo.classList.add('show');
    } else {
        navbar.classList.remove('scrolled');
        floatingLogo.classList.remove('show');
    }
});

// Intersection Observer for scroll animations
const animateOnScrollElements = document.querySelectorAll('.scroll-animated');

const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Stop observing once it's visible
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animateOnScrollElements.forEach(element => {
    observer.observe(element);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const defaultLanguage = 'en';
    const supportedLanguages = Object.keys(translations);
    const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : defaultLanguage;
    setLanguage(initialLanguage);

    // Trigger observer check on page load in case elements are already in view
    const animateOnScrollElementsOnLoad = document.querySelectorAll('.scroll-animated'); 

    animateOnScrollElementsOnLoad.forEach(element => {
         // Check if element is already in viewport on load
         const rect = element.getBoundingClientRect();
         if (rect.top < window.innerHeight && rect.bottom >= 0) {
             element.classList.add('is-visible');
             observer.unobserve(element); 
         } else {
             observer.observe(element); 
         }
    });
});