$(document).ready(function () {
    const $carousel = $(".owl-carousel");

    $carousel.owlCarousel({
        loop: false,
        autoplay: false,
        mouseDrag: true,
        touchDrag: true,
        dots: false,
        nav: false,
        responsive: {
            0: { items: 1.5 },
            600: { items: 3 },
            1000: { items: 5 }
        },
        onTranslated: function (event) {
            const totalItems = event.item.count;
            const currentIndex = event.item.index;
            const visibleItems = event.page.size;

            if (currentIndex + visibleItems >= totalItems) {
                $carousel.trigger('to.owl.carousel', [totalItems - visibleItems, 300]);
            }

            if (currentIndex <= 0) {
                $carousel.trigger('to.owl.carousel', [0, 300]);
            }
        }
    });

    // 🔹 Pequeno truque: cria o padding inicial de 55px de forma visual
    // $(".owl-stage").css("margin-left", "55px");
});