$('.app-burger-menu-clicker').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('app-burger-menu-clicker-active');
    $('.app-burger-menu-nav').toggleClass('app-burger-menu-nav-active');
});