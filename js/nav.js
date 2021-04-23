const highlightCurrentNav = () => {
    let navLinks = document.querySelectorAll(".navbar-link");
    for (link of navLinks) {
        let href = link.href;
        if (href === window.location.href) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    }
}

highlightCurrentNav();