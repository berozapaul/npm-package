/**
 * Purpose: This script contains all common utility methods for jQuery
 * Author: beroza07@gmail.com
 * Version: 1.0
 * Project: ChangeWorld
 */
(function ($) {
    $.fn.isElementVisibleOnScreen = function () {
        var elementTop = $(this).offset().top, elementBottom = $(this).offset().top + $(this).outerHeight(), screenTop = $(window).scrollTop(), screenBottom = $(window).scrollTop() + window.innerHeight;
        return ((screenBottom > elementTop) && (screenTop < elementBottom)) ? true : false;
    }
})(jQuery);