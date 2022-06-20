$(window).on("load", function () {
    $("#loader").remove();
});
// Scroll Effect
$(function () {
    if ($("#nav")) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 280) {
                $("#nav").addClass("fixed");
            }
            else {
                $("#nav").removeClass("fixed");
            }

        });
    }
});
 // End

//  Menu Toggle

$("[data-mobile-menu-toggle]").click(function(e){
    e.preventDefault();
    toggleMenu();
})


function toggleMenu()
{
    var mobileMenu = $("#mobileMenu");

    if (mobileMenu.hasClass("menu-open"))
    {
        mobileMenu.removeClass("menu-open");
    }
    else
    {
        mobileMenu.addClass("menu-open");
    }
}
// End