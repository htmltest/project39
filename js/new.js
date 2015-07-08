(function($) {

    $(document).ready(function() {

        $('.new-sections').each(function() {
            var curLength = $(this).find('.new-sections-item').length;
            if (curLength > 1) {
                $(this).find('.new-sections-item:gt(' + (Math.round(curLength / 2) - 1) + ')').addClass('right');
            }
        });

    });

    $(window).load(function() {

        $('.new-sections-item-detail').each(function() {
            var curBlock = $(this);
            curBlock.css({'margin-top': -curBlock.outerHeight() / 2});
        });

    });

})(jQuery);