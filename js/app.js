$(document).ready(function () {
    // Add hover action for dropdowns
    let dropdown_hover = $(".dropdown-hoverr");
    dropdown_hover.on('mouseover', function () {
        let menu = $(this).find('.dropdown-menu'), toggle = $(this).find('.dropdown-togglee');
        menu.addClass('show');
        toggle.addClass('show').attr('aria-expanded', true);
    });
    dropdown_hover.on('mouseout', function () {
        let menu = $(this).find('.dropdown-menu'), toggle = $(this).find('.dropdown-togglee');
        menu.removeClass('show');
        toggle.removeClass('show').attr('aria-expanded', false);
    });
    $(window).scroll(function () {
        let header = $("header"),
            headHeight = header.height(),
            scroll = $(this).scrollTop();

        if (scroll > headHeight) {
            header.addClass("fixed animate__fadeInDownBig header_bg_color");
        } else {
            header.removeClass("fixed animate__fadeInDownBig header_bg_color");
        }

    });
    let mehsullar = $(".mehsullar")
    let isler = $(".isler")
    mehsullar.on("mouseover", function () {
        $(".asagi").addClass("down1")
    })
    mehsullar.on("mouseout", function () {
        $(".asagi").removeClass("down1")
    })
    isler.on("mouseover", function () {
        $(".asagi2").addClass("down2")
    })
    isler.on("mouseout", function () {
        $(".asagi2").removeClass("down2")
    })
});

///hamburgermenu
var menuOpen = false

var init = () => {
    $(".navbar-toggler, .menu__blackout, .menu__collapse img").on("click", menuToggle)
}

var menuToggle = () => {
    $(".menu__blackout").fadeToggle();

    if (menuOpen) { // close menu
        $(".menu__collapse").css({
            left: "100vw",
            right: "-80vw"
        });
        $("html").css("overflow-y", "auto")
    } else { // open menu
        $(".menu__collapse").css({
            left: "10vw",
            right: "0"
        });
        $("html").css("overflow-y", "clip")
    }
    $(document).ready(init);
    $(".slidemehsul").click(function () {
        $(".dropdown-menu2").toggle(500)
    })
    $(".islerslide").click(function () {
        $(".dropdown-menu3").toggle(500)
    })
    menuOpen = !menuOpen;

}
$(document).ready(init)
