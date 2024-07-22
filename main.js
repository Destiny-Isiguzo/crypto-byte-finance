const navOpenBtn = document.getElementById('nav-open-btn');
const navCloseBtn = document.getElementById('nav-close-btn');
const headerNav = document.getElementById('header-nav');

navOpenBtn.addEventListener('click', () => {
    if (!headerNav.classList.contains('show-nav')) {
        headerNav.classList.toggle('show-nav');
        document.body.style.overflow = 'hidden';
    }
})

navCloseBtn.addEventListener('click', () => {
    if (headerNav.classList.contains('show-nav')) {
        headerNav.classList.toggle('show-nav');
        document.body.style.overflow = '';
    }
})





const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 10) {
        header.classList.add('in-view');
    } else {
        header.classList.remove('in-view');
    }
})





const headerNavLinks = document.querySelectorAll('.header-nav-link');

headerNavLinks.forEach(headerLink => {
    headerLink.addEventListener('click', () => {
        headerNav.classList.remove('show-nav');

        headerNavLinks.forEach(link => {
            if (link !== headerLink && link.classList.contains('currentlyActive')) {
                link.classList.remove('currentlyActive');
            }
        });

        headerLink.classList.toggle('currentlyActive');
    });
});





const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 2000) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
})


backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: -2000,
        behavior: 'smooth'
    });
})






const faqBoxAccordionItemHeader = document.querySelectorAll('.faq__box-accordion-item-header');

faqBoxAccordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', e => {
        const currentlyActiveAccordionItemHeader = document.querySelector('.faq__box-accordion-item-header.active'); 
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle('active');
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0; 
        }

        accordionItemHeader.classList.toggle('active');

        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})





const yearPlaceholder = document.getElementById('year');

let date = new Date();
let year = date.getFullYear();
yearPlaceholder.innerText = year;






const registerModalOverlay = document.getElementById('register-modal-overlay');
const registerModalContainer = document.getElementById('register-modal-container');
const closeRegisterModalBtn = document.getElementById('close-register-modal-btn');
const registerModalSubmitBtn = document.getElementById('register-modal-submit-btn');
const openRegisterModalBtn1 = document.getElementById('open-register-modal1');
const openRegisterModalBtn2 = document.getElementById('open-register-modal2');
const openRegisterModalBtn3 = document.getElementById('open-register-modal3');
const openRegisterModalBtn4 = document.getElementById('open-register-modal4');
const openRegisterModalBtn5 = document.getElementById('open-register-modal5');

const fullNameInput = document.getElementById('fullNameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const togglePasswordVisibilityBtn = document.getElementById('togglePasswordVisibility');
const passwordStrengthChar = document.getElementById('passwordStrengthChar');
const passwordStrengthDigit = document.getElementById('passwordStrengthDigit');


openRegisterModalBtn1.addEventListener('click', () => {
    registerModalOverlay.style.display = 'block';
    registerModalContainer.style.display = 'flex';
    setTimeout(() => {
        registerModalOverlay.style.opacity = '1';
        registerModalContainer.style.opacity = '1';
    }, 30);
})

openRegisterModalBtn2.addEventListener('click', () => {
    registerModalOverlay.style.display = 'block';
    registerModalContainer.style.display = 'flex';
    setTimeout(() => {
        registerModalOverlay.style.opacity = '1';
        registerModalContainer.style.opacity = '1';
    }, 30);
})

openRegisterModalBtn3.addEventListener('click', () => {
    registerModalOverlay.style.display = 'block';
    registerModalContainer.style.display = 'flex';
    setTimeout(() => {
        registerModalOverlay.style.opacity = '1';
        registerModalContainer.style.opacity = '1';
    }, 30);
})

openRegisterModalBtn4.addEventListener('click', () => {
    registerModalOverlay.style.display = 'block';
    registerModalContainer.style.display = 'flex';
    setTimeout(() => {
        registerModalOverlay.style.opacity = '1';
        registerModalContainer.style.opacity = '1';
    }, 30);
})

openRegisterModalBtn5.addEventListener('click', () => {
    registerModalOverlay.style.display = 'block';
    registerModalContainer.style.display = 'flex';
    setTimeout(() => {
        registerModalOverlay.style.opacity = '1';
        registerModalContainer.style.opacity = '1';
    }, 30);
})

closeRegisterModalBtn.addEventListener('click', () => {
    fullNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';

    passwordStrengthChar.style.color = '#CACACA';
    passwordStrengthDigit.style.color = '#CACACA';

    registerModalOverlay.style.opacity = '0';
    registerModalContainer.style.opacity = '0';
    setTimeout(() => {
        registerModalOverlay.style.display = 'none';
        registerModalContainer.style.display = 'none';
    }, 300);
})


togglePasswordVisibilityBtn.addEventListener('click', () => {
    if (passwordInput.getAttribute("type") === 'password') {
        togglePasswordVisibilityBtn.classList.add('fa-eye');
        togglePasswordVisibilityBtn.classList.remove('fa-eye-slash');
        passwordInput.setAttribute('type', 'text');
    } else {
        togglePasswordVisibilityBtn.classList.remove('fa-eye');
        togglePasswordVisibilityBtn.classList.add('fa-eye-slash');
        passwordInput.setAttribute('type', 'password');
    }
});


registerModalSubmitBtn.addEventListener('click', function (e) {
    let fullNameValid = validateFullName(fullNameInput.value);
    let emailValid = validateEmail(emailInput.value);
    let passwordValid = validatePassword(passwordInput.value);

    if (!fullNameValid) {
        e.preventDefault();
        fullNameInput.style.borderColor = 'red';
    } else {
        fullNameInput.style.borderColor = '#CACACA';
    }

    
    if (!emailValid) {
        e.preventDefault(); 
        emailInput.style.borderColor = 'red';
    } else {
        emailInput.style.borderColor = '#CACACA';
    }

    
    if (!passwordValid) {
        e.preventDefault();
        passwordStrengthChar.style.color = 'red';
        passwordStrengthDigit.style.color = 'red';
    } else {
        passwordStrengthChar.style.color = 'green';
        passwordStrengthDigit.style.color = 'green';
    }
});

function validateFullName(name) {
    return /^[a-zA-Z\s]+$/.test(name);
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    // return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}

function validatePassword(password) {
    return /^(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
}





const signinModalOverlay = document.getElementById('signin-modal-overlay');
const signinModalContainer = document.getElementById('signin-modal-container');
const signinModalSubmitBtn = document.getElementById('signin-modal-submit-btn');
const closeSignInModalBtn = document.getElementById('close-signin-modal');
const openSignInModalBtn = document.getElementById('open-signin-modal');

const signinEmailInput = document.getElementById('signinEmailInput');
const signinPasswordInput = document.getElementById('signinPasswordInput');
const signinTogglePasswordVisibility = document.getElementById('signinTogglePasswordVisibility');
const loader = document.getElementById('loader');
const signinModalMessage = document.getElementById('signin-modal-form-message');


openSignInModalBtn.addEventListener('click', () => {
    signinModalOverlay.style.display = 'block';
    signinModalContainer.style.display = 'flex';
    setTimeout(() => {
        signinModalOverlay.style.opacity = '1';
        signinModalContainer.style.opacity = '1';
    }, 30);
})

closeSignInModalBtn.addEventListener('click', () => {
    signinEmailInput.value = '';
    signinPasswordInput.value = '';
    signinModalMessage.innerText = '';
    signinModalOverlay.style.opacity = '0';
    signinModalContainer.style.opacity = '0';
    setTimeout(() => {
        signinModalOverlay.style.display = 'none';
        signinModalContainer.style.display = 'none';
    }, 300);
})

signinTogglePasswordVisibility.addEventListener('click', () => {
    if (signinPasswordInput.getAttribute("type") === 'password') {
        signinTogglePasswordVisibility.classList.add('fa-eye');
        signinTogglePasswordVisibility.classList.remove('fa-eye-slash');
        signinPasswordInput.setAttribute('type', 'text');
    } else {
        signinTogglePasswordVisibility.classList.remove('fa-eye');
        signinTogglePasswordVisibility.classList.add('fa-eye-slash');
        signinPasswordInput.setAttribute('type', 'password');
    }
});




const userCredentials = {
    email: 'demo@example.com',
    password: 'demo123'
};

signinModalSubmitBtn.addEventListener('click', () => {
    if (signinEmailInput.value === '' || signinPasswordInput.value === '') {
        signinModalMessage.innerText = 'All fields are required';
        return;
    }

    if (signinEmailInput.value === userCredentials.email && signinPasswordInput.value === userCredentials.password) {

        loader.style.display = 'block';
        signinModalSubmitBtn.innerText = 'Please wait...';
        signinModalSubmitBtn.disabled = true;

        setTimeout(() => {
            window.location.href = 'Personal-account.html';
        }, 5500);
        
    } else {
        signinModalMessage.innerText = 'Invalid email or password';
        signinEmailInput.value = '';
        signinPasswordInput.value = '';
    }

    setTimeout(() => {
        signinModalMessage.innerText = '';
    }, 4000);
});