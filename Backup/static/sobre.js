class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            console.log();
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation ='navLinkFade 0.5s ease forwards $ {index / 7 + 0.3}s');
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }


    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;

    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu2",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

/*SCRIPT FAQ*/

class Accordion {
    constructor(accordionListQuestions) {
        this.accordionListQuestions = document.querySelectorAll(accordionListQuestions);
        this.activeItemClass = "active";
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeItemClass);
        item.nextElementSibling.classList.toggle(this.activeItemClass);
    }

    addAccordionEvent() {
        this.accordionListQuestions.forEach((question) => {
            question.addEventListener("click", () => this.toggleAccordion(question));
        });
    
    }

    init() {
        if (this.accordionListQuestions.length) {
            this.addAccordionEvent();
        }
        return this;
    }
}

const accordion = new Accordion(".faq-question");
accordion.init();

/*SCRIPT TABS*/

let tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});    
