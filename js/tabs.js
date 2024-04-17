$(document).ready(function () {
    var tabNavigationLinks = $('ul.tabNavigation a');
    var tabContentContainers = $('.tabContent');

    function switchTabs(selectedTab, color) {
        tabContentContainers.hide(); // Hide all tabs
        $(selectedTab).fadeIn().css('background-color', color); // Show selected tab with new background color

        tabNavigationLinks.removeClass('selected'); // Remove 'selected' class from all links
        $('a[href="' + selectedTab + '"]').addClass('selected').css('background-color', color); // Highlight the selected tab link
    }

    tabNavigationLinks.click(function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        var selectedTab = $(this).attr('href');
        var color = $(this).data('color'); // Get the color from data attribute
        switchTabs(selectedTab, color); // Switch to the selected tab
    });

    // Initialize tabs
    switchTabs(tabNavigationLinks.first().attr('href'), tabNavigationLinks.first().data('color')); // Show the first tab by default
});
$(document).ready(function () {
    var tabNavigationLinks = $('ul.tabNavigation a');
    var tabContentContainers = $('.tabContent');

    function switchTabs(selectedTab, color) {
        // Fade out currently visible tab content, then fade in new content
        tabContentContainers.filter(':visible').fadeOut(300, function () {
            // After fade out, fade in the new content and change background color
            $(selectedTab).fadeIn(300).css('background-color', color);
        });

        // Remove 'selected' class and reset styles from all tabs
        tabNavigationLinks.removeClass('selected').css('background', '#eee');
        // Highlight the selected tab link and change its background color
        $('a[href="' + selectedTab + '"]').addClass('selected').css('background-color', color);
    }

    tabNavigationLinks.click(function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        var selectedTab = $(this).attr('href');
        var color = $(this).data('color'); // Get the color from data attribute
        switchTabs(selectedTab, color); // Switch to the selected tab
    });

    // Initialize the first tab
    var firstTabLink = tabNavigationLinks.first();
    switchTabs(firstTabLink.attr('href'), firstTabLink.data('color')); // Show the first tab by default
});
