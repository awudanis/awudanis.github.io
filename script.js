document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');
    var navLinks = [];

    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        if (href && href.charAt(0) === '#') {
            navLinks.push(links[i]);
        }
    }

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});
