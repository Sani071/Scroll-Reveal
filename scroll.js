window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'left'
});
sr.reveal('.navbar-brand', {
    duration: 2000,
    origin: 'top',
});
sr.reveal('.nav-text', {
    duration: 3000,
    origin: 'top',
})
sr.reveal('.s-left', {
    duration: 3000,
    origin: 'top',
    distance: '250px'
});
sr.reveal('.s-right', {
    duration: 3000,
    origin: 'tright',
    distance: '250px'
})
sr.reveal('.sbtn', {
    duration: 1500,
    origin: 'right',
    delay: 2000,
    distance: '200px'
});
sr.reveal('#testomonial div', {
    duration: 2000,
    origin: 'right'
});
sr.reveal('.sbtn', {
    duration: 1000,
    origin: 'right',
    delay: 2000,
    distance: '200px'
});
sr.reveal('.mmm', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.in-1', {
    duration: 2000,
    origin: 'right',
    distance: '200px'
});
sr.reveal('.in-2', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.right', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.hhh', {
    duration: 2000,
    origin: 'right',
    distance: '200px'
});
sr.reveal('.ddd', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
});
sr.reveal('.footer', {
    duration: 3000,
    origin: 'top',
    distance: '250px'
});

$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
 
 