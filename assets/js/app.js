window.onload = function() {
    activeMenu();
}

function activeMenu() {
    $('.hamburguer').on('click', function() {
        $('.modal-menu').toggleClass('active');
    })
}