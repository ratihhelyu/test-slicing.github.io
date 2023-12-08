const navbarSupportedContent = document.getElementById('navbarSupportedContent');

const bgHeaderNavbarTop = document.getElementById('bgHeaderNavbarTop');

const headerNavbarTopMenu = document.getElementById('headerNavbarTopMenu');

const footerNavbarBottomMenu = document.getElementById('footerNavbarBottomMenu');

navbarSupportedContent.addEventListener('show.bs.collapse', event => {
    bgHeaderNavbarTop.style.background = "#111111";
    headerNavbarTopMenu.innerHTML = "CLOSE";
    footerNavbarBottomMenu.innerHTML = "CLOSE";
});

navbarSupportedContent.addEventListener('hide.bs.collapse', event => {
    bgHeaderNavbarTop.style.background = "none";
    headerNavbarTopMenu.innerHTML = "MENU";
    footerNavbarBottomMenu.innerHTML = "MENU";
});