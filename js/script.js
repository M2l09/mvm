$(document).ready(function() {
    $(".toggle ").click(function() {
        $(".navbar--right-side ").slideToggle(".active");
    });
});

$(document).ready(function() {
    $(".pop").click(function() {
        $(".tooltip").toggleClass("active");
    });
});


$(".mainnav div").click(function() {
    $("ul").slideToggle();
    $("ul ul ").css("display", "none");
    $(".mainnav .on ").toggleClass("on");
});


$(".hasDD").click(function(e) {
    $(this)
        .find("> ul")
        .slideToggle();
    $(this)
        .find("> ul ul")
        .css("display", "none");
    $(this)
        .find("> ul li")
        .removeClass("on");
    $(this).toggleClass("on");
    e.stopPropagation();
});


$(document).ready(function() {
    $('.toggle').click(function() {
        $(this).toggleClass('open');
    });
});



function img2svg() {
    jQuery('.in-svg').each(function(i, e) {
        var $img = jQuery(e);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');
            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
            }
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
}
img2svg();