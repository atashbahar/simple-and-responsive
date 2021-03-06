$(function () {

    // Do our DOM lookups beforehand
    var nav_container = $(".nav-container");
    var nav = $("nav");

    var top_spacing = 15;
    var waypoint_offset = 50;

    nav_container.waypoint({
        handler: function (direction) {
            if (direction == 'down') {                
                nav_container.css({ 'height': nav.outerHeight() });
                nav.stop().addClass("sticky").css("top", -nav.outerHeight()).animate({ "top": "" });
            } else {
                nav_container.css({ 'height': 'auto' });
                nav.stop().removeClass("sticky").css("top", nav.outerHeight() + waypoint_offset).animate({ "top": "" });
            }

        },
        offset: function () {
            return -nav.outerHeight() - waypoint_offset;
        }
    });

    var sections = $("section");
    var navigation_links = $("nav li a");

    sections.waypoint({
        handler: function (direction) {

            var active_section;
            active_section = $(this);
            if (direction === "up") active_section = active_section.prev();

            var active_link = $('nav li a[href="#' + active_section.attr("id") + '"]');
            navigation_links.removeClass("selected");
            active_link.addClass("selected");

        },
        offset: '25%'
    })

    $('#pull').click(function (e) {
        e.preventDefault();
        $('nav ul').toggleClass('expanded');
    });

    navigation_links.click(function (event) {
        $.scrollTo(
			$(this).attr("href"),
			{
			    duration: 400,
			    offset: { 'left': 0, 'top': -0.15 * $(window).height() }
			}
		);

        if ($('#pull').css('display') === 'block') {
            $('nav ul').removeClass('expanded');
        }

    });


});