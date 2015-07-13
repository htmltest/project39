(function($) {

    $(document).ready(function() {

        $('.new-sections').each(function() {
            var curLength = $(this).find('.new-sections-item').length;
            if (curLength > 1) {
                $(this).find('.new-sections-item:gt(' + (Math.round(curLength / 2) - 1) + ')').addClass('right');
            }
        });

        $('.new-sections-tabs-menu a').eq(0).click(function(e) {
            $('.new-sections').removeClass('backside');

            $('.new-sections-tabs-menu a').removeClass('active');
            $(this).addClass('active');

            $('.new-sections-item').toggleClass('right');

            e.preventDefault();
        });

        $('.new-sections-tabs-menu a').eq(1).click(function(e) {
            $('.new-sections').addClass('backside');

            $('.new-sections-tabs-menu a').removeClass('active');
            $(this).addClass('active');

            $('.new-sections-item').toggleClass('right');

            e.preventDefault();
        });

    });

    $(window).load(function() {

        $('.new-sections-item-detail').each(function() {
            var curBlock = $(this);
            curBlock.css({'margin-top': -curBlock.outerHeight() / 2});
        });

    });

})(jQuery);