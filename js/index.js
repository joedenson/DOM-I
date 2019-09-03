const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let anchorTags = document.getElementsByTagName('a');
anchorTags[0].setAttribute('class', siteContent['nav']['nav-item-1']);
anchorTags[1].setAttribute('class', siteContent['nav']['nav-item-2']);
anchorTags[2].setAttribute('class', siteContent['nav']['nav-item-3']);
anchorTags[3].setAttribute('class', siteContent['nav']['nav-item-4']);
anchorTags[4].setAttribute('class', siteContent['nav']['nav-item-5']);
anchorTags[5].setAttribute('class', siteContent['nav']['nav-item-6']);

anchorTags[0].textContent = "Services";
anchorTags[1].textContent = "Product";
anchorTags[2].textContent = "Vision";
anchorTags[3].textContent = "Features";
anchorTags[4].textContent = "About";
anchorTags[5].textContent = "Contact";



let ctaH1 = document.querySelector('h1');
ctaH1.textContent = 'DOM Is Awesome';

let ctaButton = document.querySelector('button');
ctaButton.textContent = "Get Started";

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

//grab all h4s
let allH4s = document.querySelectorAll('h4');

// grab all p tags
let allPs = document.querySelectorAll('p');

let featuresH4 = allH4s[0].textContent = siteContent['main-content']['features-h4'];
let featuresContent = allPs[0].textContent = siteContent['main-content']['features-content'];


let aboutH4 = allH4s[1].textContent = siteContent['main-content']['about-h4'];
let aboutContent = allPs[1].textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesH4 = allH4s[2].textContent = siteContent['main-content']['services-h4'];
let servicesContent = allPs[2].textContent = siteContent['main-content']['services-content'];

let productH4 = allH4s[3].textContent = siteContent['main-content']['product-h4'];
let productContent = allPs[3].textContent = siteContent['main-content']['product-content'];

let visionH4 = allH4s[4].textContent = siteContent['main-content']['vision-h4'];
let visionContent = allPs[4].textContent = siteContent['main-content']['vision-content'];

let contactH4 = allH4s[5].textContent = siteContent['contact']['contact-h4'];
let contactAddress = allPs[5].textContent = siteContent['contact']['address'];

let contactPhone = allPs[6].textContent = siteContent['contact']['phone'];

let contactEmail = allPs[7].textContent = siteContent['contact']['email'];



let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];

let navText = document.getElementsByTagName('a');

for (let i = 0; i < navText.length; i++) {
    navText[i].style.color = 'green';
}

const navEl = document.querySelector('nav');
const anchorFirst = document.createElement('a');

anchorFirst.textContent = 'Home';
anchorFirst.href = '#';
anchorFirst.style.color = 'green';

const anchorLast = document.createElement('a');
anchorLast.textContent = 'Blog';
anchorLast.href = '#';
anchorLast.style.color = 'green';


navEl.prepend(anchorFirst);
navEl.appendChild(anchorLast);