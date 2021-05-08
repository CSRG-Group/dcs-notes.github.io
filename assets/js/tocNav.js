function toggleNav(x) {
    x.classList.toggle("change");
    const grid = document.getElementById("mainGrid");
    const nav = document.getElementById("sidenav");
    if (x.classList.contains('change')) {
        grid.style.gridTemplateColumns = "25% 75%";
        nav.style.width = "100%";
        nav.style.overflow = "scroll";
    } else {
        grid.style.gridTemplateColumns = "0% 100%";
        nav.style.width = "0%";
        nav.style.overflow = "hidden";
    }
}


