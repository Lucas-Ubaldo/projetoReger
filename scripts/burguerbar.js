class BurguerBar {
    constructor(hamburguer, navItems, navLinks) {
        this.hamburguer = document.querySelector(hamburguer)
        this.navItems = document.querySelector(navItems)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeClass = "active"

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation 
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        })
    }

    handleClick() {
        this.navItems.classList.toggle(this.activeClass)
        this.hamburguer.classList.toggle(this.activeClass)
        this.animateLinks();
    }

    addClickEvent() {
        this.hamburguer.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.hamburguer) {
            this.addClickEvent();
        }
        return this
    }
}

const burguerBar = new BurguerBar(
    ".hamburguer",
    ".nav-items",
    ".nav-items li"
)
burguerBar.init()